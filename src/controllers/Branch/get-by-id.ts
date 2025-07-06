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

export default (app: TypeApplication) =>
    app.get(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    BranchService: BranchService({ db: DatabaseContext }),
                }
                const result = await deps.BranchService.getOne({ id })
                if (!result)
                    throw NewError("Failed to fetch Branch Not Found", "FETCH_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Branch fetched successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error fetching Branch:", error)
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
                tags: ["Masterdata", "Branch"],
                params: z.object({
                    id: z.string().min(1, "Branch ID is required"),
                }),
                responses: {
                    200: {
                        description: "Branch fetch data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "Branch not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "FETCH_FAILED",
                                    message: "Failed to fetch Branch Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "Branch fetch data fail",
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
