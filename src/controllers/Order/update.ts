import type { TypeApplication } from "@/configure/create-application.js";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { OrderService } from "@/services/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { OrderOptionalDefaultsSchema } from "@/types/schema/prisma/index.js";

import z from "zod";

const RequestSchema = OrderOptionalDefaultsSchema;

const ResponseSchema = z.object({
  data: OrderOptionalDefaultsSchema,
  message: z.string().default("Order updated successfully"),
});

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ params, body, set }) => {
      try {
        const validBody = RequestSchema.parse(body);
        const { id } = params;
        const deps = {
          OrderService: OrderService({ db: DatabaseContext }),
        };
        const result = await deps.OrderService.onUpdate(id, validBody);
        if (!result)
          throw NewError("Failed to update Order", "UPDATE_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Order updated successfully",
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
        console.error("Error updating Order:", error);
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
        requestBody: {
          content: {
            "application/json": {
              schema: RequestSchema,
              example: {
                customerName: "",
                room_id: "",
                team_id: "",
                orderDate: "",
                totalPrice: 0,
                book_number: 0,
                number: 0,
              },
            },
          },
        },
        responses: {
          200: {
            description: "Order update success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "Order update fail",
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
