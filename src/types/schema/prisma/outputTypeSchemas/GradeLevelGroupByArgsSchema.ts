import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelWhereInputSchema } from '../inputTypeSchemas/GradeLevelWhereInputSchema'
import { GradeLevelOrderByWithAggregationInputSchema } from '../inputTypeSchemas/GradeLevelOrderByWithAggregationInputSchema'
import { GradeLevelScalarFieldEnumSchema } from '../inputTypeSchemas/GradeLevelScalarFieldEnumSchema'
import { GradeLevelScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/GradeLevelScalarWhereWithAggregatesInputSchema'

export const GradeLevelGroupByArgsSchema: z.ZodType<Prisma.GradeLevelGroupByArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithAggregationInputSchema.array(),GradeLevelOrderByWithAggregationInputSchema ]).optional(),
  by: GradeLevelScalarFieldEnumSchema.array(),
  having: GradeLevelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GradeLevelGroupByArgsSchema;
