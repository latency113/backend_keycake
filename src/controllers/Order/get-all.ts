import { Elysia } from "elysia";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { OrderService } from "@/services/index.js";
import { BaseRequestQuerySchema } from "@/types/global/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { OrderOptionalDefaultsWithPartialRelationsSchema } from "@/types/schema/prisma/index.js";
import z from "zod";

const ResponseSchema = z.object({
  data: OrderOptionalDefaultsWithPartialRelationsSchema.array(),
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
          OrderService: OrderService({ db: DatabaseContext }),
        };
        const [result, total] = await Promise.all([
          deps.OrderService.getAll({ pagination: { limit, page } }),
          deps.OrderService.count(),
        ]);
        if (!result)
          throw NewError("Failed to fetch Order", "FETCH_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Order fetched successfully",
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
        console.error("Error fetching OrderType:", error);
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
        tags: ["Order"],
        responses: {
          200: {
            description: "Order fetch success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "Order fetch fail",
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