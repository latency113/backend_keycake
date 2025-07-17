import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { RoomService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { RoomOptionalDefaultsSchema } from "@/types/schema/prisma/index.js"

const ResponseSchema = z.object({
  data: RoomOptionalDefaultsSchema,
  message: z.string(),
})

export default (app: TypeApplication) =>
  app.delete(
    "/:id",
    async ({ params, set }) => {
      try {
        const { id } = params
        const deps = {
          RoomService: RoomService({ db: DatabaseContext }),
        }
        const result = await deps.RoomService.onDelete(id)
        if (!result)
          throw NewError("Failed to DeleteRoom Not Found", "Delete_FAILED", 404)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Room Deleted successfully",

        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error DeletingRoom:", error)
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
        params: z.object({
          id: z.string().min(1, "Room ID is required"),
        }),
        responses: {
          200: {
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
            description: "Room Delete data success",
          },
          404: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "Delete_FAILED",
                  message: "Failed to DeleteRoom Not Found",
                  status: 404,
                }),
              },
            },
            description: "Room not found",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Room Delete data fail",
          },
        },
        tags: ["Room"],
      },
    },
  )
