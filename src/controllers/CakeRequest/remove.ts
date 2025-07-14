import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeRequestService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { CakeRequestOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: CakeRequestOptionalDefaultsSchema,
    message: z.string(),
})

export default (app: TypeApplication) =>
    app.delete(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    CakeRequestService: CakeRequestService({ db: DatabaseContext }),
                }
                const result = await deps.CakeRequestService.onDelete(id)
                if (!result)
                    throw NewError("Failed to Delete CakeRequest Not Found", "Delete_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "CakeRequest Deleted successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error Deleting CakeRequest:", error)
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
                tags: ["CakeRequest"],
                params: z.object({
                    id: z.string().min(1, "CakeRequest ID is required"),
                }),
                responses: {
                    200: {
                        description: "CakeRequest Delete data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "CakeRequest not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "Delete_FAILED",
                                    message: "Failed to Delete CakeRequest Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "CakeRequest Delete data fail",
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
