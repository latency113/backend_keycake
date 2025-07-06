import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { UserService } from "@/services/index.js"
import { FailResponseSchema, SuccessResponseSchema } from "@/types/global/response.js"

import { UserSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = z.object({
  email: z.string().optional(),
  fname: z.string().optional(),
  lastname: z.string().optional(),
  password: z.string().optional(),
  role: z.string().optional(),
  username: z.string().optional(),
})

const ResponseSchema = SuccessResponseSchema.extend({
  data: UserSchema,
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const { id } = params
        const deps = {
          UserService: UserService({ db: DatabaseContext }),
        }
        const parsed = RequestSchema.safeParse(body)
        if (!parsed.success) {
          set.status = 400
          return {
            code: "INVALID_BODY",
            message: "Invalid request body",
            status: 400,
          }
        }
        const updateData = Object.fromEntries(
          Object.entries(parsed.data).filter(
            ([_, v]) => v !== undefined && v !== null && v !== "",
          ),
        )
        // Map branch_id (snake_case) to branchId (camelCase) for Prisma compatibility
        if (updateData.branch_id) {
          updateData.branchId = updateData.branch_id
          delete updateData.branch_id
        }
        // Remove forbidden fields if present
        delete updateData.id
        delete updateData.createdAt
        // ตรวจสอบว่ามี field ให้ update หรือไม่
        if (Object.keys(updateData).length === 0) {
          set.status = 400
          return {
            code: "NO_UPDATE_FIELDS",
            message: "No fields provided for update",
            status: 400,
          }
        }
        // ตรวจสอบ user เดิมว่ามีอยู่จริงไหม
        const oldUser = await deps.UserService.getById(id)
        if (!oldUser)
          throw NewError("User not found", "NOT_FOUND", 400)
        // อัปเดตเฉพาะ field ที่ส่งมา
        const result = await deps.UserService.onUpdate(id, updateData)
        if (!result)
          throw NewError("Failed to update User", "UPDATE_FAILED", 400)
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
        }
        else {
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
        description: "Update user by id (เลือก field ที่ต้องการแก้ไขได้)",
        requestBody: {
          content: {
            "application/json": {
              example: {
                email: "",
                fname: "",
                lastname: "",
                password: "",
                role: "",
                username: "",
              },
              schema: RequestSchema,
            },
          },
        },
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "User update data success",
          },
          400: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "User update data fail not found data ",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "User update data fail",
          },
        },
        tags: ["User"],
      },
    },
  )
