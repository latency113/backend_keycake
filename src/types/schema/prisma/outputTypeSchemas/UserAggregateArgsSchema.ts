import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { UserOrderByWithRelationInputSchema } from "../inputTypeSchemas/UserOrderByWithRelationInputSchema"
import { UserWhereInputSchema } from "../inputTypeSchemas/UserWhereInputSchema"
import { UserWhereUniqueInputSchema } from "../inputTypeSchemas/UserWhereUniqueInputSchema"

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  cursor: UserWhereUniqueInputSchema.optional(),
  orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: UserWhereInputSchema.optional(),
}).strict()

export default UserAggregateArgsSchema
