import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import {GradeLevelService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import {GradeLevelOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema =GradeLevelOptionalDefaultsSchema.partial()

const ResponseSchema = z.object({
    data:GradeLevelOptionalDefaultsSchema,
    message: z.string().default("GradeLevel created successfully"),
})

export default (app: TypeApplication) =>
    app.post(
        "/",
        async ({ body, set }) => {
            try {
                const deps = {
                   GradeLevelService:GradeLevelService({ db: DatabaseContext }),
                }
                const result = await deps.GradeLevelService.onCreate(body)
                if (result === null)
                    throw NewError("Failed to createGradeLevel", "CREATION_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "GradeLevel created successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error creatingGradeLevel:", error)
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
                tags: ["GradeLevel"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                level: "",
                                year: "",
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "GradeLevel creation success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "GradeLevel creation fail",
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
