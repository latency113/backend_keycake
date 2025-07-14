import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { TeamService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { TeamOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = TeamOptionalDefaultsSchema

const ResponseSchema = z.object({
    data: TeamOptionalDefaultsSchema,
    message: z.string().default("Team created successfully"),
})

export default (app: TypeApplication) =>
    app.post(
        "/",
        async ({ body, set }) => {
            try {
                const deps = {
                    TeamService: TeamService({ db: DatabaseContext }),
                }
                const result = await deps.TeamService.onCreate(body)
                if (result === null)
                    throw NewError("Failed to create Team", "CREATION_FAILED", 500)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Team created successfully",
                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error creating Team:", error)
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
                tags: ["Team"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                name: "",
                                room_id: "",
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Team creation success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    500: {
                        description: "Team creation fail",
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
