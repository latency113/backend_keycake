import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { ProductService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { ProductOptionalDefaultsSchema } from "@/types/schema/prisma/-"

const ResponseSchema = z.object({
  data: ProductOptionalDefaultsSchema,
  message: z.string(),
})

export default (app: TypeApplication) =>
  app.get(
    "/:id",
    async ({ params, set }) => {
      try {
        const { id } = params
        const deps = {
          ProductService: ProductService({ db: DatabaseContext }),
        }
        const result = await deps.ProductService.getOne({ id })
        if (!result)
          throw NewError("Failed to fetch Product Not Found", "FETCH_FAILED", 404)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Product fetched successfully",

        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error fetching Product:", error)
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
          id: z.string().min(1, "Product ID is required"),
        }),
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Product fetch data success",
          },
          404: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "FETCH_FAILED",
                  message: "Failed to fetch Product Not Found",
                  status: 404,
                }),
              },
            },
            description: "Product not found",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Product fetch data fail",
          },
        },
        tags: ["Product"],
      },
    },
  )
