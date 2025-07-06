import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { RoomService } from "@/services/index.js"

import { RoomSchema } from "@/types/schema/prisma/index.js"

const ResponseSchema = z.object({
  data: RoomSchema,
  message: z.string(),
})
const RequestParamSchema = z.object({
  id: z.string().min(1, "Room ID is required"),
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
        const result = await deps.RoomService.getById(id)
        if (!result)
          throw NewError("Room Not Found", "NOT_FOUND", 404)
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
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Room fetch data success",
          },
          404: { description: "Room not found" },
          500: { description: "Internal server error" },
        },
        tags: ["Room"],
      },
      params: RequestParamSchema,
    },
  )
