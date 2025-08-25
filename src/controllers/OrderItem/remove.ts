import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderItemService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { OrderItemOptionalDefaultsSchema } from "@/types/schema/prisma/"

const ResponseSchema = z.object({
  data: OrderItemOptionalDefaultsSchema,
  message: z.string(),
})

export default (app: TypeApplication) =>
  app.delete(
    "/:id",
    async ({ params, set }) => {
      try {
        const { id } = params
        const deps = {
          OrderItemService: OrderItemService({ db: DatabaseContext }),
        }
        const result = await deps.OrderItemService.onDelete(id)
        if (!result)
          throw NewError("Failed to Delete OrderItem Not Found", "Delete_FAILED", 404)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "OrderItem Deleted successfully",

        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error Deleting OrderItem:", error)
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
          id: z.string().min(1, "OrderItem ID is required"),
        }),
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "OrderItem Delete data success",
          },
          404: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "Delete_FAILED",
                  message: "Failed to Delete OrderItem Not Found",
                  status: 404,
                }),
              },
            },
            description: "OrderItem not found",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "OrderItem Delete data fail",
          },
        },
        tags: ["OrderItem"],
      },
    },
  )
