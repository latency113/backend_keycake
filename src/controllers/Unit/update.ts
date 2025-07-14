import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UnitService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { UnitOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = UnitOptionalDefaultsSchema

const ResponseSchema = z.object({
    data: UnitOptionalDefaultsSchema,
    message: z.string().default("Unit updated successfully"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const validBody = RequestSchema.parse(body)
                const { id } = params
                const deps = {
                    UnitService: UnitService({ db: DatabaseContext }),
                }
                const result = await deps.UnitService.onUpdate(id, validBody)
                if (!result)
                    throw NewError("Failed to update Unit", "UPDATE_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Unit updated successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
                
            }
            catch (error) {
                console.error("Error updating Unit:", error)
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
                tags: ["Unit"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                name: "",
                                group_number: "",
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Unit update success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "Unit update fail",
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
