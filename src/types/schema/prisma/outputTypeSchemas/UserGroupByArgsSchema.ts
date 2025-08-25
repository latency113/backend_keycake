import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { UserOrderByWithAggregationInputSchema } from "../inputTypeSchemas/UserOrderByWithAggregationInputSchema"
import { UserScalarFieldEnumSchema } from "../inputTypeSchemas/UserScalarFieldEnumSchema"
import { UserScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/UserScalarWhereWithAggregatesInputSchema"
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema"

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: UserWhereInputSchema.optional(),
}).strict()

export default UserGroupByArgsSchema
