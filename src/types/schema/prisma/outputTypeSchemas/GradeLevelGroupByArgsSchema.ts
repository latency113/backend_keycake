import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelOrderByWithAggregationInputSchema } from "../inputTypeSchemas/GradeLevelOrderByWithAggregationInputSchema"
import { GradeLevelScalarFieldEnumSchema } from "../inputTypeSchemas/GradeLevelScalarFieldEnumSchema"
import { GradeLevelScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/GradeLevelScalarWhereWithAggregatesInputSchema"
import { GradeLevelWhereInputSchema } from "../inputTypeSchemas/GradeLevelWhereInputSchema"

export const GradeLevelGroupByArgsSchema: z.ZodType<Prisma.GradeLevelGroupByArgs> = z.object({
  by: GradeLevelScalarFieldEnumSchema.array(),
  having: GradeLevelScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([GradeLevelOrderByWithAggregationInputSchema.array(), GradeLevelOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: GradeLevelWhereInputSchema.optional(),
}).strict()

export default GradeLevelGroupByArgsSchema
