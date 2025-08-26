import type { Elysia } from "elysia";
import z from "zod";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { OrderService } from "@/services/index.js";
import { BaseRequestQuerySchema } from "@/types/global/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { OrderWithRelationsSchema } from "@/types/schema/prisma/index.js";

const ResponseSchema = z.object({
  data: OrderWithRelationsSchema.array(),
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
          data: result.map((order) => ({
            ...order,
            order_items: order.orderItems,
          })),
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

        set.status = err.status;
        return {
          code: err.code,
          message: err.message,
          status: err.status,
        };
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
            description: "Order fetch data success",
          },
          404: {
            content: {
              "application/json": {
                schema: FailResponseSchema.default({
                  code: "FETCH_FAILED",
                  message: "Failed to fetch Order Not Found",
                  status: 404,
                }),
              },
            },
            description: "Order not found",
          },
          500: {
            content: {
              "application/json": {
                schema: FailResponseSchema,
              },
            },
            description: "Order fetch data fail",
          },
        },
        tags: ["Order"],
      },
    }
  );
