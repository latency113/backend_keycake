import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelOrderByWithRelationInputSchema } from "../inputTypeSchemas/GradeLevelOrderByWithRelationInputSchema"
import { GradeLevelWhereInputSchema } from "../inputTypeSchemas/GradeLevelWhereInputSchema"
import { GradeLevelWhereUniqueInputSchema } from "../inputTypeSchemas/GradeLevelWhereUniqueInputSchema"

export const GradeLevelAggregateArgsSchema: z.ZodType<Prisma.GradeLevelAggregateArgs> = z.object({
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  orderBy: z.union([GradeLevelOrderByWithRelationInputSchema.array(), GradeLevelOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: GradeLevelWhereInputSchema.optional(),
}).strict()

export default GradeLevelAggregateArgsSchema
