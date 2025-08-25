import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeRequestService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { CakeRequestPartialSchema } from "@/types/schema/prisma/"

const RequestSchema = CakeRequestPartialSchema

const ResponseSchema = z.object({
  data: CakeRequestPartialSchema,
  message: z.string().default("CakeRequest updated successfully"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const validBody = RequestSchema.parse(body)
        const { id } = params
        const deps = {
          CakeRequestService: CakeRequestService({ db: DatabaseContext }),
        }
        const result = await deps.CakeRequestService.onUpdate(id, validBody)
        if (!result)
          throw NewError("Failed to update CakeRequest", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "CakeRequest updated successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error updating CakeRequest:", error)
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
                note: "",
                requestDate: "",
                status: "",
                user_id: "",
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
            description: "CakeRequest update success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "CakeRequest update fail",
          },
        },
        tags: ["CakeRequest"],
      },
    },
  )
