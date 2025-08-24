import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { TeamService } from "@/services/index.js"
import { FailResponseSchema } from "@/types/global/response.js"

import { TeamPartialSchema } from "@/types/schema/prisma/index.js"

const RequestSchema = TeamPartialSchema

const ResponseSchema = z.object({
  data: TeamPartialSchema,
  message: z.string().default("Team updated successfully"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const validBody = RequestSchema.parse(body)
        const { id } = params
        const deps = {
          TeamService: TeamService({ db: DatabaseContext }),
        }
        const result = await deps.TeamService.onUpdate(id, validBody)
        if (!result)
          throw NewError("Failed to update Team", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Team updated successfully",
        })
        if (!parse.success)
          throw NewError(`Failed to parse response object: ${JSON.stringify(parse.error)}`, "RESPONSE_PARSING_FAILED", 500)
        set.status = 200
        return parse.data
      }
      catch (error) {
        console.error("Error updating Team:", error)
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
        requestBody: {
          content: {
            "application/json": {
              example: {
                name: "",
                class_id: "",
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
            description: "Team update success",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Team update fail",
          },
        },
        tags: ["Team"],
      },
    },
  )
