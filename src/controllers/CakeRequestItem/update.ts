import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeRequestItemsService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { CakeRequestItemsOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = CakeRequestItemsOptionalDefaultsSchema

const ResponseSchema = z.object({
    data: CakeRequestItemsOptionalDefaultsSchema,
    message: z.string().default("CakeRequestItems updated successfully"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const validBody = RequestSchema.parse(body)
                const { id } = params
                const deps = {
                    CakeRequestItemsService: CakeRequestItemsService({ db: DatabaseContext }),
                }
                const result = await deps.CakeRequestItemsService.onUpdate(id, validBody)
                if (!result)
                    throw NewError("Failed to update CakeRequestItems", "UPDATE_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "CakeRequestItems updated successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
                
            }
            catch (error) {
                console.error("Error updating CakeRequestItems:", error)
                const err = ParseError(error)
                const fail = FailResponseSchema.safeParse({
                    code: err.code,
                    message: err.message,
                    status: err.status,
                })
                set.status = err.status
                if (fail.success) {
                    return fail.data
                } else {
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
                tags: ["CakeRequestItems"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                request_id : "",
                                product_id : "",
                                quantity : "",
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "CakeRequestItems update success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "CakeRequestItems update fail",
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
