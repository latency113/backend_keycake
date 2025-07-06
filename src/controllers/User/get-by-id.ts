import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema, SuccessResponseSchema } from "@/types/global/response.js"

import { UserSchema } from "@/types/schema/prisma/index.js"

const ResponseSchema = SuccessResponseSchema.extend({
  data: UserSchema,
})
const RequestParamSchema = z.object({
  id: z.string().min(1, "User ID is required"),
})

export default (app: TypeApplication) =>
  app.get(
    "/:id",
    async ({ params, set }) => {
      try {
        const { id } = params
        const deps = {
          UserService: UserService({ db: DatabaseContext }),
        }
        const result = await deps.UserService.getById(id)
        console.log('User service result:', result)
        if (!result)
          throw NewError("Failed to fetch User Not Found", "FETCH_FAILED", 404)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "User fetched successfully",

        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error fetching User:", error)
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
                example: {
                  data: {
                    createdAt: "2023-01-01T12:00:00.000Z",
                    email: "john.doe@example.com",
                    fname: "John",
                    id: "someUserId",
                    lastname: "Doe",
                    password: "hashedPassword",
                    role: "USER",
                    updatedAt: "2023-01-01T12:00:00.000Z",
                    username: "john.doe",
                  },
                  message: "User fetched successfully",
                },
                schema: ResponseSchema,
              },
            },
            description: "User fetch data success",
          },
          400: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "FETCH_FAILED",
                  message: "Failed to fetch User Not Found",
                  status: 400,
                }),
              },
            },
            description: "User fetch data fail not found data ",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "User fetch data fail",
          },
        },
        tags: ["User"],
      },
      params: RequestParamSchema,
    },
  )
