import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderItemService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { OrderItemPartialSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = OrderItemPartialSchema

const ResponseSchema = z.object({
  data: OrderItemPartialSchema,
  message: z.string().default("OrderItem updated successfully"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const validBody = RequestSchema.parse(body)
        const { id } = params
        const deps = {
          OrderItemService: OrderItemService({ db: DatabaseContext }),
        }
        const result = await deps.OrderItemService.onUpdate(id, validBody)
        if (!result)
          throw NewError("Failed to update OrderItem", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "OrderItem updated successfully",
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
        console.error("Error updating OrderItem:", error)
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
                order_id: "",
                pound: 0,
                product_id: "",
                quantity: 0,
                subtotal: 0,
                unitPrice: 0,
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
            description: "OrderItem update success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "OrderItem update fail",
          },
        },
        tags: ["OrderItem"],
      },
    },
  )
