import type { TypeApplication } from "@/configure/create-application.js";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { CakeRequestService } from "@/services/CakeRequest/CakeRequest.service.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { CakeRequestOptionalDefaultsSchema } from "@/types/schema/prisma/index.ts";
import z from "zod";

const RequestSchema = CakeRequestOptionalDefaultsSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const ResponseSchema = z.object({
  data: CakeRequestOptionalDefaultsSchema,
  message: z.string().default("CakeRequest created successfully"),
});

export default (app: TypeApplication) =>
  app.post(
    "/",
    async ({ body, set }) => {
      try {
        const deps = {
          CakeRequestService: CakeRequestService({ db: DatabaseContext }),
        };
        const validBody = RequestSchema.parse(body);
        const result = await deps.CakeRequestService.onCreate(validBody);
        if (!result)
          throw NewError(
            "Failed to create CakeRequest",
            "CREATION_FAILED",
            500
          );
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "CakeRequest created successfully",
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
        console.error("Error creating CakeRequest:", error);
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
        tags: ["CakeRequest"],
        requestBody: {
          content: {
            "application/json": {
              schema: RequestSchema,
              example: {
                requestDate: "",
                status: "pending",
                note: "",
                user_id: "",
                branch_id: "",
              },
            },
          },
        },
        responses: {
          200: {
            description: "CakeRequest created successfully",
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
