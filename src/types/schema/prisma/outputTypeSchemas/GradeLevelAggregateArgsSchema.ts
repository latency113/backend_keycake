import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelWhereInputSchema } from '../inputTypeSchemas/GradeLevelWhereInputSchema'
import { GradeLevelOrderByWithRelationInputSchema } from '../inputTypeSchemas/GradeLevelOrderByWithRelationInputSchema'
import { GradeLevelWhereUniqueInputSchema } from '../inputTypeSchemas/GradeLevelWhereUniqueInputSchema'

export const GradeLevelAggregateArgsSchema: z.ZodType<Prisma.GradeLevelAggregateArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default GradeLevelAggregateArgsSchema;
