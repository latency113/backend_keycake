import type { TypeApplication } from "@/configure/create-application.js";
import { NewError, ParseError } from "@/helper/error.js";
import DatabaseContext from "@/repositories/prisma.js";
import { BranchService } from "@/services/index.js";
import { FailResponseSchema } from "@/types/global/response.js";
import { BranchOptionalDefaultsSchema } from "@/types/schema/prisma/index.js";

import z from "zod";

const RequestSchema = BranchOptionalDefaultsSchema;

const ResponseSchema = z.object({
  data: BranchOptionalDefaultsSchema,
  message: z.string().default("Branch updated successfully"),
});

export default (app: TypeApplication) =>
  app.put(
    "/:id",
    async ({ params, body, set }) => {
      try {
        const validBody = RequestSchema.parse(body);
        const { id } = params;
        const deps = {
          BranchService: BranchService({ db: DatabaseContext }),
        };
        const result = await deps.BranchService.onUpdate(id, validBody);
        if (!result)
          throw NewError("Failed to update Branch", "UPDATE_FAILED", 500);
        const parse = ResponseSchema.safeParse({
          data: result,
          message: "Branch updated successfully",
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
        console.error("Error updating Branch:", error);
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
        tags: ["Room"],
        requestBody: {
          content: {
            "application/json": {
              schema: RequestSchema,
              example: {
                branch_id: "",
                grade_level_id: "",
                name: "",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Branch update success",
            content: {
              "application/json": {
                schema: ResponseSchema,
              },
            },
          },
          500: {
            description: "Branch update fail",
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
