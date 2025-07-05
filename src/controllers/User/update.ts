import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { UserOptionalDefaultsSchema, UserPartialSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: UserOptionalDefaultsSchema,
    message: z.string(),
})
const RequestSchema = UserPartialSchema.extend({
    fname: z.string().optional(),
    lastname: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    email: z.string().optional(),
    branchId: z.string().optional(),
})

const RequestParamSchema = z.object({
    id: z.string().min(1, "User ID is required"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const { id } = params
                const deps = {
                    UserService: UserService({ db: DatabaseContext }),
                }
                const result = await deps.UserService.onUpdate(id, body)
                if (!result)
                    throw NewError("Failed to update User", "UPDATE_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "User updated successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error updating User:", error)
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
                tags: ["User"],
                responses: {
                    200: {
                        description: "User update data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    400: {
                        description: "User update data fail not found data ",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "UPDATE_FAILED",
                                    message: "Failed to update User Not Found",
                                    status: 400,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "User update data fail",
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

