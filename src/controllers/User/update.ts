import type { TypeApplication } from "@/configure/create-application.js"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"
import { UserOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

import z from "zod"

const RequestSchema = z.object({
    fname: z.string().optional(),
    lastname: z.string().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    email: z.string().optional(),
    branch_id: z.string().optional(),
    role: z.string().optional(),
});

const ResponseSchema = z.object({
    data: UserOptionalDefaultsSchema,
    message: z.string().default("User updated successfully"),
})

export default (app: TypeApplication) =>
    app.put(
        "/:id",
        async ({ params, body, set }) => {
            try {
                const { id } = params;
                const deps = {
                    UserService: UserService({ db: DatabaseContext }),
                };
                const parsed = RequestSchema.safeParse(body);
                if (!parsed.success) {
                    set.status = 400;
                    return {
                        code: "INVALID_BODY",
                        message: "Invalid request body",
                        status: 400,
                    };
                }
                let updateData = Object.fromEntries(
                    Object.entries(parsed.data).filter(
                        ([_, v]) => v !== undefined && v !== null && v !== "",
                    ),
                );
                // Map branch_id (snake_case) to branchId (camelCase) for Prisma compatibility
                if (updateData.branch_id) {
                    updateData.branchId = updateData.branch_id;
                    delete updateData.branch_id;
                }
                // Remove forbidden fields if present
                delete updateData.id;
                delete updateData.createdAt;
                // ตรวจสอบว่ามี field ให้ update หรือไม่
                if (Object.keys(updateData).length === 0) {
                    set.status = 400;
                    return {
                        code: "NO_UPDATE_FIELDS",
                        message: "No fields provided for update",
                        status: 400,
                    };
                }
                // ตรวจสอบ user เดิมว่ามีอยู่จริงไหม
                const oldUser = await deps.UserService.getById(id);
                if (!oldUser) throw NewError("User not found", "NOT_FOUND", 400);
                // อัปเดตเฉพาะ field ที่ส่งมา
                const result = await deps.UserService.onUpdate(id, updateData);
                if (!result)
                    throw NewError("Failed to update User", "UPDATE_FAILED", 400);
                const parse = ResponseSchema.safeParse({
                    data: result,
                    message: "User updated successfully",
                });
                if (!parse.success)
                    throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500);
                set.status = 200;
                return parse.data;
            } catch (error) {
                console.error("Error updating User:", error);
                const err = ParseError(error);
                const fail = FailResponseSchema.safeParse({
                    code: err.code,
                    message: err.message,
                    status: err.status,
                });
                set.status = err.status;
                if (fail.success) {
                    return fail.data;
                } else {
                    return {
                        code: "RESPONSE_PARSING_FAILED",
                        message: "Failed to parse error response",
                        status: 500,
                    };
                }
            }
        },
        {
            detail: {
                tags: ["User"],
                description: "Update user by id (เลือก field ที่ต้องการแก้ไขได้)",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: RequestSchema,
                            example: {
                                fname: "",
                                lastname: "",
                                username: "",
                                password: "",
                                email: "",
                                branch_id: "",
                                role: "",
                            }
                        }
                    }
                },
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
                                schema: FailResponseSchema,
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
                    },
                },
            },
        }
    )

