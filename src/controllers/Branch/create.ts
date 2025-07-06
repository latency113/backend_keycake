import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { BranchService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { BranchOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = BranchOptionalDefaultsSchema

const ResponseSchema = z.object({
    data: BranchOptionalDefaultsSchema,
    message: z.string().default("Branch created successfully"),
})

export default (app: TypeApplication) =>
    app.post(
        "/",
        async ({ body, set }) => {
            try {
                const deps = {
                    BranchService: BranchService({ db: DatabaseContext }),
                }
                const result = await deps.BranchService.onCreate(body)
                if (result === null)
                    throw NewError("Failed to create Branch", "CREATION_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Branch created successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error creating Branch:", error)
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
                tags: ["Branch"],
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
                        description: "Branch creation success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "Branch creation fail",
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
