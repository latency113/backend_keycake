import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderService } from "@/services/Order/Order.service.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { OrderOptionalDefaultsSchema } from "@/types/schema/prisma/"

const RequestSchema = OrderOptionalDefaultsSchema

const ResponseSchema = z.object({
  data: OrderOptionalDefaultsSchema,
  message: z.string().default("Order created successfully"),
})

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          OrderService: OrderService({ db: DatabaseContext }),
        }
        const validBody = RequestSchema.parse(body)
        const result = await deps.OrderService.onCreate(validBody)
        if (!result)
          throw NewError("Failed to create Order", "CREATION_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Order created successfully",
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
        console.error("Error creating Order:", error)
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
                advisor: "",
                book_number: 0,
                classroom_id: "หากไม่มีให้ลบ field นี้",
                customerName: "",
                deposit: 0,
                depository: "",
                number: 0,
                orderDate: "",
                phone: "",
                pickup_date: "",
                team_id: "หากไม่มีให้ลบ field นี้",
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
            description: "Order created successfully",
          },
        },
        tags: ["Order"],
      },
    },
  )
