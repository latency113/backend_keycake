import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema, SuccessResponseSchema } from "@/types/global/response.js"

import { UserPartialSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = UserPartialSchema

const ResponseSchema = SuccessResponseSchema.extend({
  data: UserPartialSchema,
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const { id } = params
        const deps = {
          UserService: UserService({ db: DatabaseContext }),
        }
        const parsed = RequestSchema.safeParse(body)
        if (!parsed.success) {
          set.status = 400
          return {
            code: "INVALID_BODY",
            message: "Invalid request body",
            status: 400,
          }
        }
        const result = await deps.UserService.onUpdate(id, parsed.data)
        if (!result)
          throw NewError("Failed to update User", "UPDATE_FAILED", 400)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "User updated successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error updating User:", error)
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
        description: "Update user by id (เลือก field ที่ต้องการแก้ไขได้)",
        requestBody: {
          content: {
            "application/json": {
              example: {
                email: "",
                fname: "",
                lastname: "",
                password: "",
                role: "",
                username: "",
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
            description: "User update data success",
          },
          400: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "User update data fail not found data ",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "User update data fail",
          },
        },
        tags: ["User"],
      },
    },
  )
