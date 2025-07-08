import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { GradeLevelService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { GradeLevelOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: GradeLevelOptionalDefaultsSchema,
    message: z.string(),
})

export default (app: TypeApplication) =>
    app.delete(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    GradeLevelService: GradeLevelService({ db: DatabaseContext }),
                }
                const result = await deps.GradeLevelService.onDelete(id)
                if (!result)
                    throw NewError("Failed to Delete GradeLevel Not Found", "Delete_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "GradeLevel Deleted successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error Deleting GradeLevel:", error)
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
                tags: ["GradeLevel"],
                params: z.object({
                    id: z.string().min(1, "GradeLevel ID is required"),
                }),
                responses: {
                    200: {
                        description: "GradeLevel Delete data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "GradeLevel not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "Delete_FAILED",
                                    message: "Failed to Delete GradeLevel Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "GradeLevel Delete data fail",
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
