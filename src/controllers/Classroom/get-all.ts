import type { Elysia } from "elysia"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { ClassroomService } from "@/services/index.js"
import { BaseRequestQuerySchema } from "@/types/global/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { ClassroomWithDepartmentSchema } from "@/types/schema/prisma/index"

const ResponseSchema = z.object({
  data: ClassroomWithDepartmentSchema.array(),
  message: z.string(),
  meta_data: z.object({
    limit: z.number().optional(),
    page: z.number().optional(),
    total: z.number().optional(),
  }),
})

export default (app: Elysia) =>
  app.get(
    "/",
    async ({ query, set }) => {
      try {
        const parsed = BaseRequestQuerySchema.safeParse(query)
        if (!parsed.success) {
          set.status = 400
          return {
            code: "INVALID_QUERY",
            message: "Invalid query parameters",
            status: 400,
          }
        }
        const { limit, page } = parsed.data
        const deps = {
          ClassroomService: ClassroomService({ db: DatabaseContext }),
        }
        const [result, total] = await Promise.all([
          deps.ClassroomService.getAll({ pagination: { limit, page } }),
          deps.ClassroomService.count(),
        ])
        if (!result)
          throw NewError("Failed to fetch Classroom", "FETCH_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Classroom fetched successfully",
          meta_data: {
            limit,
            page,
            total,
          },
        })
        if (!parse.success) {
          throw NewError(
            `Failed to parse response object: ${JSON.stringify(parse.error)}`,
            "RESPONSE_PARSING_FAILED",
            500,
          )
        }
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error fetching ClassroomType:", error)
        const err = ParseError(error)
        const fail = FailResponseSchema.safeParse({
          code: err.code,
          message: err.message,
          status: err.status,
        })
        set.status = err.status
        if (fail.success) {
          return fail.data
        }
        else {
          return {
            code: "RESPONSE_PARSING_FAILED",
            message: "Failed to parse error response",
            status: 500,
          }
        }
      }
    },
    {
      detail: {
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Classroom fetch success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Classroom fetch fail",
          },
        },
        tags: ["Classroom"],
      },
    },
  )
