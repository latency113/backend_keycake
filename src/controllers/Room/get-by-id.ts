import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { RoomService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { RoomOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const ResponseSchema = z.object({
    data: RoomOptionalDefaultsSchema,
    message: z.string(),
})

export default (app: TypeApplication) =>
    app.get(
        "/:id",
        async ({ params, set }) => {
            try {
                const { id } = params
                const deps = {
                    RoomService: RoomService({ db: DatabaseContext }),
                }
                const result = await deps.RoomService.getOne({ id })
                if (!result)
                    throw NewError("Failed to fetch Room Not Found", "FETCH_FAILED", 404)
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "Room fetched successfully",

                })
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
                set.status = 200
                return parse.data
            }
            catch (error) {
                console.error("Error fetching Room:", error)
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
                tags: ["Room"],
                params: z.object({
                    id: z.string().min(1, "Room ID is required"),
                }),
                responses: {
                    200: {
                        description: "Room fetch data success",
                        content: {
                            "application/json": {
                                schema: ResponseSchema,
                            },
                        },
                    },
                    404: {
                        description: "Room not found",
                        content: {
                            "application/json": {
                                schema: FailResponseSchema.default({
                                    code: "FETCH_FAILED",
                                    message: "Failed to fetch Room Not Found",
                                    status: 404,
                                }),
                            },
                        },
                    },
                    500: {
                        description: "Room fetch data fail",
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
