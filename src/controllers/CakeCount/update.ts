import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeCountService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { CakeCountPartialSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = CakeCountPartialSchema

const ResponseSchema = z.object({
  data: CakeCountPartialSchema,
  message: z.string().default("CakeCount updated successfully"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const validBody = RequestSchema.parse(body)
        const { id } = params
        const deps = {
          CakeCountService: CakeCountService({ db: DatabaseContext }),
        }
        const result = await deps.CakeCountService.onUpdate(id, validBody)
        if (!result)
          throw NewError("Failed to update CakeCount", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "CakeCount updated successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error updating CakeCount:", error)
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
                pound: 0,
                product_id: "",
                quantity: 0,
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
            description: "CakeCount update success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "CakeCount update fail",
          },
        },
        tags: ["CakeCount"],
      },
    },
  )
