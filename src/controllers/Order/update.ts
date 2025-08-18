import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { OrderPartialSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = OrderPartialSchema

const ResponseSchema = z.object({
  data: OrderPartialSchema,
  message: z.string().default("Order updated successfully"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const validBody = RequestSchema.parse(body)
        const { id } = params
        const deps = {
          OrderService: OrderService({ db: DatabaseContext }),
        }
        const result = await deps.OrderService.onUpdate(id, validBody)
        if (!result)
          throw NewError("Failed to update Order", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Order updated successfully",
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
        console.error("Error updating Order:", error)
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
                book_number: 0,
                number: 0,
                customerName: "",
                depository: "",
                deposit: 0,
                advisor: "",
                orderDate: "",
                phone: "",
                pickup_date: "",
                room_id: "",
                team_id: "",
                totalPrice: 0,
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
            description: "Order update success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Order update fail",
          },
        },
        tags: ["Order"],
      },
    },
  )
