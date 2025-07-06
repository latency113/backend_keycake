import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { BranchService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { BranchOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: BranchOptionalDefaultsSchema,
    message: z.string(),
})
const RequestParamSchema = z.object({
    id: z.string().min(1, "Branch ID is required"),
})

export default (app: TypeApplication) =>
    app.delete(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    BranchService: BranchService({ db: DatabaseContext }),
                }
                const result = await deps.BranchService.onDelete(id)
                if (!result)
                    throw NewError("Failed to delete Branch", "DELETE_FAILED", 400)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Branch deleted successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error deleting Branch:", error)
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
            detail: {
                tags: ["Branch"],
                responses: {
                    200: {
                        description: "Branch delete data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    400: {
                        description: "Branch delete data fail not found data ",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "DELETE_FAILED",
                                    message: "Failed to delete Branch",
                                    status: 400,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "Branch delete data fail",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "DELETE_FAILED",
                                    message: "Failed to delete Branch",
                                    status: 500,
                                }),
                            },
                        },
                    },
                },
            },
        }
    )