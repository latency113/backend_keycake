import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeRequestService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { CakeRequestOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = CakeRequestOptionalDefaultsSchema

const ResponseSchema = z.object({
    data: CakeRequestOptionalDefaultsSchema,
    message: z.string().default("CakeRequest updated successfully"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const validBody = RequestSchema.parse(body)
                const { id } = params
                const deps = {
                    CakeRequestService: CakeRequestService({ db: DatabaseContext }),
                }
                const result = await deps.CakeRequestService.onUpdate(id, validBody)
                if (!result)
                    throw NewError("Failed to update CakeRequest", "UPDATE_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "CakeRequest updated successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
                
            }
            catch (error) {
                console.error("Error updating CakeRequest:", error)
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
                tags: ["CakeRequest"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                requestDate : "",
                                status : "",
                                note : "",
                                user_id : "",
                                branch_id : "",
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "CakeRequest update success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "CakeRequest update fail",
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
