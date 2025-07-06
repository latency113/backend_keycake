import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { BranchService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { BranchOptionalDefaultsSchema, BranchPartialSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: BranchOptionalDefaultsSchema,
    message: z.string(),
})
const RequestSchema = BranchPartialSchema.extend({
    name: z.string().optional(),
    groupNumber: z.string().optional(),
})

const RequestParamSchema = z.object({
    id: z.string().min(1, "Branch ID is required"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const { id } = params
                const deps = {
                    BranchService: BranchService({ db: DatabaseContext }),
                }
                const result = await deps.BranchService.onUpdate(id, body)
                if (!result)
                    throw NewError("Failed to update Branch", "UPDATE_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Branch updated successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error updating Branch:", error)
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
            params: RequestParamSchema,
            body: {
                schema: RequestSchema
            },
            detail: {
                tags: ["Branch"],
                responses: {
                    200: {
                        description: "Branch update data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    400: {
                        description: "Branch update data fail not found data ",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "UPDATE_FAILED",
                                    message: "Failed to update Branch Not Found",
                                    status: 400,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "Branch update data fail",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema,
                            },
                        },
                    }
                }
            }
        }
    )

