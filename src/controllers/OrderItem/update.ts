import type { TypeApplication } from "@/configure/create-application.js";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { OrderItemService } from "@/services/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { OrderItemOptionalDefaultsSchema } from "@/types/schema/prisma/index.js";

import z from "zod";

const RequestSchema = OrderItemOptionalDefaultsSchema;

const ResponseSchema = z.object({
  data: OrderItemOptionalDefaultsSchema,
  message: z.string().default("OrderItem updated successfully"),
});

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ params, body, set }) => {
      try {
        const validBody = RequestSchema.parse(body);
        const { id } = params;
        const deps = {
          OrderItemService: OrderItemService({ db: DatabaseContext }),
        };
        const result = await deps.OrderItemService.onUpdate(id, validBody);
        if (!result)
          throw NewError("Failed to update OrderItem", "UPDATE_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "OrderItem updated successfully",
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
        console.error("Error updating OrderItem:", error);
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
        tags: ["OrderItem"],
        requestBody: {
          content: {
            "application/json": {
              schema: RequestSchema,
              example: {
                order_id: "",
                product_id: "",
                quantity: 0,
                unitPrice: 0,
                subtotal: 0,
              },
            },
          },
        },
        responses: {
          200: {
            description: "OrderItem update success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "OrderItem update fail",
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
