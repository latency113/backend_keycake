import { Elysia } from "elysia";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import {TeamService } from "@/services/index.js";
import { BaseRequestQuerySchema } from "@/types/global/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import {TeamOptionalDefaultsWithPartialRelationsSchema } from "@/types/schema/prisma/index.js";
import z from "zod";

const ResponseSchema = z.object({
  data:TeamOptionalDefaultsWithPartialRelationsSchema.array(),
  message: z.string(),
  meta_data: z.object({
    limit: z.number().optional(),
    page: z.number().optional(),
    total: z.number().optional(),
  }),
});

export default (app: Elysia) =>
  app.get(
    "/",
    async ({ query, set }) => {
      try {
        const parsed = BaseRequestQuerySchema.safeParse(query);
        if (!parsed.success) {
          set.status = 400;
          return {
            code: "INVALID_QUERY",
            message: "Invalid query parameters",
            status: 400,
          };
        }
        const { limit, page } = parsed.data;
        const deps = {
         TeamService:TeamService({ db: DatabaseContext }),
        };
        const [result, total] = await Promise.all([
          deps.TeamService.getAll({ pagination: { limit, page } }),
          deps.TeamService.count(),
        ]);
        if (!result)
          throw NewError("Failed to fetchTeam", "FETCH_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Team fetched successfully",
          meta_data: {
            limit,
            page,
            total,
          },
        });
        if (!parse.success)
          throw NewError(
            `Failed to parse response object: ${JSON.stringify(parse.error)}`,
            "RESPONSE_PARSING_FAILED",
            500
          );
        set.status = 200;
        return parse.data;
      } catch (error) {
        console.error("Error fetchingTeamType:", error);
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
        tags: ["Team"],
        responses: {
          200: {
            description: "Team fetch success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "Team fetch fail",
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
          },
        },
      },
    }
  );