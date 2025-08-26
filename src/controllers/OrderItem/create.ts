import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderItemService } from "@/services/OrderItem/OrderItem.service.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { OrderItemOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = OrderItemOptionalDefaultsSchema

const ResponseSchema = z.object({
  data: OrderItemOptionalDefaultsSchema,
  message: z.string().default("OrderItem created successfully"),
})

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          OrderItemService: OrderItemService({ db: DatabaseContext }),
        }
        const validBody = RequestSchema.parse(body)
        const result = await deps.OrderItemService.onCreate(validBody)
        if (!result)
          throw NewError("Failed to create OrderItem", "CREATION_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "OrderItem created successfully",
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
        console.error("Error creating OrderItem:", error)
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
            description: "OrderItem created successfully",
          },
        },
        tags: ["OrderItem"],
      },
    },
  )
