import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { UserOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: UserOptionalDefaultsSchema,
    message: z.string(),
})
const RequestParamSchema = z.object({
    id: z.string().min(1, "User ID is required"),
})

export default (app: TypeApplication) =>
    app.delete(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    UserService: UserService({ db: DatabaseContext }),
                }
                const result = await deps.UserService.onDelete(id)
                if (!result)
                    throw NewError("Failed to delete User", "DELETE_FAILED", 400)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "User deleted successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error deleting User:", error)
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
                tags: ["User"],
                responses: {
                    200: {
                        description: "User delete data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    400: {
                        description: "User delete data fail not found data ",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "DELETE_FAILED",
                                    message: "Failed to delete User",
                                    status: 400,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "User delete data fail",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "DELETE_FAILED",
                                    message: "Failed to delete User",
                                    status: 500,
                                }),
                            },
                        },
                    },
                },
            },
        }
    )
