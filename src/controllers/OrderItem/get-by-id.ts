import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { OrderItemService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { OrderItemOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: OrderItemOptionalDefaultsSchema,
    message: z.string(),
})

export default (app: TypeApplication) =>
    app.get(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    OrderItemService: OrderItemService({ db: DatabaseContext }),
                }
                const result = await deps.OrderItemService.getOne({ id })
                if (!result)
                    throw NewError("Failed to fetch OrderItem Not Found", "FETCH_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "OrderItem fetched successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error fetching OrderItem:", error)
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
                tags: ["OrderItem"],
                params: z.object({
                    id: z.string().min(1, "OrderItem ID is required"),
                }),
                responses: {
                    200: {
                        description: "OrderItem fetch data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "OrderItem not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "FETCH_FAILED",
                                    message: "Failed to fetch OrderItem Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "OrderItem fetch data fail",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema,
                            },
                        },
                    },
                },
            },
        }
    )
