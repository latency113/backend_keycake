import type { TypeApplication } from "@/configure/create-application.js";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { OrderService } from "@/services/Order/Order.service.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { OrderOptionalDefaultsSchema } from "@/types/schema/prisma/index.ts";
import z from "zod";

const RequestSchema = OrderOptionalDefaultsSchema;

const ResponseSchema = z.object({
  data: OrderOptionalDefaultsSchema,
  message: z.string().default("Order created successfully"),
});

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          OrderService: OrderService({ db: DatabaseContext }),
        };
        const validBody = RequestSchema.parse(body);
        const result = await deps.OrderService.onCreate(validBody);
        if (!result)
          throw NewError("Failed to create Order", "CREATION_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Order created successfully",
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
        console.error("Error creating Order:", error);
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
                room_id: "หากไม่มีให้ลบ field นี้",
                team_id: "หากไม่มีให้ลบ field นี้",
                orderDate: "",
                totalPrice: 0,
                book_number: 0,
                number: 0,
                phone: "",
                pickup_date: "",
                depository: "",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Order created successfully",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
        },
      },
    }
  );
