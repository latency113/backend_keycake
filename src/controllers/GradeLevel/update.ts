import type { TypeApplication } from "@/configure/create-application.js"
import z from "zod"
import { NewError, ParseError } from "@/helper/error.js"
import DatabaseContext from "@/repositories/prisma.js"
import { GradeLevelService } from "@/services/index.js"
import { SuccessResponseSchema } from "@/types/global/response.js"

import {
  GradeLevelPartialSchema,
  GradeLevelSchema,
} from "@/types/schema/prisma/index.js"

const ResponseSchema = SuccessResponseSchema.extend({
  data: GradeLevelSchema,
})
const RequestSchema = GradeLevelPartialSchema.pick({ level: true, year: true })

const RequestParamSchema = z.object({
  id: z.string().min(1, "GradeLevel ID is required"),
})

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ body, params, set }) => {
      try {
        const { id } = params
        const deps = {
          GradeLevelService: GradeLevelService({ db: DatabaseContext }),
        }
        const result = await deps.GradeLevelService.onUpdate(id, body)
        if (!result)
          throw NewError("Failed to update GradeLevel", "UPDATE_FAILED", 500)
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "GradeLevel updated successfully",
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
            description: "GradeLevel update data success",
          },
          404: { description: "GradeLevel not found" },
          500: { description: "Internal server error" },
        },
        tags: ["GradeLevel"],
      },
      params: RequestParamSchema,
    },
  )
