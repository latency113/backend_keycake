import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { DepartmentService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { DepartmentOptionalDefaultsSchema } from "@/types/schema/prisma"

const ResponseSchema = z.object({
  data: DepartmentOptionalDefaultsSchema,
  message: z.string(),
})

export default (app: TypeApplication) =>
  app.get(
    "/:id",
    async ({ params, set }) => {
      try {
        const { id } = params
        const deps = {
          DepartmentService: DepartmentService({ db: DatabaseContext }),
        }
        const result = await deps.DepartmentService.getOne({ id })
        if (!result)
          throw NewError("Failed to fetch Department Not Found", "FETCH_FAILED", 404)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Department fetched successfully",

        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error fetching Department:", error)
        const err = ParseError(error)
        set.status = err.status
        return {
          code: err.code,
          message: err.message,
          status: err.status,
        }
      }
    },
    {
      detail: {
        params: z.object({
          id: z.string().min(1, "Department ID is required"),
        }),
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Department fetch data success",
          },
          404: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "FETCH_FAILED",
                  message: "Failed to fetch Department Not Found",
                  status: 404,
                }),
              },
            },
            description: "Department not found",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Department fetch data fail",
          },
        },
        tags: ["Department"],
      },
    },
  )
