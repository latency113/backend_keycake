import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { CakeCountService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { CakeCountOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: CakeCountOptionalDefaultsSchema,
    message: z.string(),
})

export default (app: TypeApplication) =>
    app.delete(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    CakeCountService: CakeCountService({ db: DatabaseContext }),
                }
                const result = await deps.CakeCountService.onDelete(id)
                if (!result)
                    throw NewError("Failed to Delete CakeCount Not Found", "Delete_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "CakeCount Deleted successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error Deleting CakeCount:", error)
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
                tags: ["CakeCount"],
                params: z.object({
                    id: z.string().min(1, "CakeCount ID is required"),
                }),
                responses: {
                    200: {
                        description: "CakeCount Delete data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "CakeCount not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "Delete_FAILED",
                                    message: "Failed to Delete CakeCount Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "CakeCount Delete data fail",
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
