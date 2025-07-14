import { Elysia } from "elysia";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { UnitService } from "@/services/index.js";
import { BaseRequestQuerySchema } from "@/types/global/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { UnitOptionalDefaultsSchema } from "@/types/schema/prisma/index.js";
import z from "zod";

const ResponseSchema = z.object({
  data: UnitOptionalDefaultsSchema.array(),
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
          UnitService: UnitService({ db: DatabaseContext }),
        };
        const [result, total] = await Promise.all([
          deps.UnitService.getAll({ pagination: { limit, page } }),
          deps.UnitService.count(),
        ]);
        if (!result)
          throw NewError("Failed to fetch Unit", "FETCH_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Unit fetched successfully",
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
        console.error("Error fetching UnitType:", error);
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
        tags: ["Unit"],
        responses: {
          200: {
            description: "Unit fetch success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "Unit fetch fail",
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