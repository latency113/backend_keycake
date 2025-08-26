import type { TypeApplication } from "@/configure/create-application.js";
import z from "zod";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { CakeRequestItemsService } from "@/services/CakeRequestItem/CakeRequestItem.service.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { CakeRequestItemsOptionalDefaultsSchema } from "@/types/schema/prisma/index.js";

const RequestSchema = CakeRequestItemsOptionalDefaultsSchema.omit({
  id: true,
});

const ResponseSchema = z.object({
  data: CakeRequestItemsOptionalDefaultsSchema,
  message: z.string().default("CakeRequestItems created successfully"),
});

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          CakeRequestItemsService: CakeRequestItemsService({
            db: DatabaseContext,
          }),
        };
        const validBody = RequestSchema.parse(body);
        const result = await deps.CakeRequestItemsService.onCreate(validBody);
        if (!result) {
          throw NewError(
            "Failed to create CakeRequestItems",
            "CREATION_FAILED",
            500
          );
        }
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "CakeRequestItems created successfully",
        });
        if (!parse.success) {
          throw NewError(
            `Failed to parse response object: ${JSON.stringify(parse.error)}`,
            "RESPONSE_PARSING_FAILED",
            500
          );
        }
        set.status = 200;
        return parse.data;
      } catch (error) {
        console.error("Error creating CakeRequestItems:", error);
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
        requestBody: {
          content: {
            "application/json": {
              example: {
                product_id: "",
                quantity: "",
                request_id: "",
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
            description: "CakeRequestItems created successfully",
          },
        },
        tags: ["CakeRequestItems"],
      },
    }
  );
