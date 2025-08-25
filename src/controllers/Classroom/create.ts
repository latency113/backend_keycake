import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { ClassroomService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { ClassroomOptionalDefaultsSchema } from "@/types/schema/prisma/"

const RequestSchema = ClassroomOptionalDefaultsSchema

const ResponseSchema = z.object({
  data: ClassroomOptionalDefaultsSchema,
  message: z.string().default("Classroom created successfully"),
})

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          ClassroomService: ClassroomService({ db: DatabaseContext }),
        }
        const result = await deps.ClassroomService.onCreate(body)
        if (result === null)
          throw NewError("Failed to create Classroom", "CREATION_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Classroom created successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error creating Classroom:", error)
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
        requestBody: {
          content: {
            "application/json": {
              example: {
                department_id: "",
                grade_level_id: "",
                name: "",
              },
              schema: RequestSchema,
            },
          },
        },
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Classroom creation success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Classroom creation fail",
          },
        },
        tags: ["Classroom"],
      },
    },
  )
