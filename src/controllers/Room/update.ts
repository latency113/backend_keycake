import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { RoomService } from "@/services/index.js"
import {
  SuccessResponseSchema,
} from "@/types/global/response.js"

import { RoomPartialSchema, RoomSchema } from "@/types/schema/prisma/index.js"

const ResponseSchema = SuccessResponseSchema.extend({
  data: RoomSchema,
})
const RequestSchema = RoomPartialSchema.pick({ branch_id: true, grade_level_id: true, name: true })

const RequestParamSchema = z.object({
  id: z.string().min(1, "Room ID is required"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const { id } = params
        const deps = {
          RoomService: RoomService({ db: DatabaseContext }),
        }
        const result = await deps.RoomService.onUpdate(id, body)
        if (!result)
          throw NewError("Failed to update Room", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Room updated successfully",
        })
        if (!parse.success) {
          throw NewError(
            `Failed to parse response object: ${JSON.stringify(parse.error)}`,
            "RESPONSE_PARSING_FAILED",
            500,
          )
        }
        set.status = 200
        return parse.data
      }
      catch (error) {
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
      body: RequestSchema,
      detail: {
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Room update data success",
          },
          404: { description: "Room not found" },
          500: { description: "Internal server error" },
        },
        tags: ["Room"],
      },
      params: RequestParamSchema,
    },
  )
