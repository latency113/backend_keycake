import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { ProductService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { ProductOptionalDefaultsSchema } from "@/types/schema/prisma/"

const RequestSchema = ProductOptionalDefaultsSchema

const ResponseSchema = z.object({
  data: ProductOptionalDefaultsSchema,
  message: z.string().default("Product created successfully"),
})

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          ProductService: ProductService({ db: DatabaseContext }),
        }
        const result = await deps.ProductService.onCreate(body)
        if (result === null)
          throw NewError("Failed to create Product", "CREATION_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Product created successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error creating Product:", error)
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
                name: "",
                price: 0,
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
            description: "Product creation success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Product creation fail",
          },
        },
        tags: ["Product"],
      },
    },
  )
