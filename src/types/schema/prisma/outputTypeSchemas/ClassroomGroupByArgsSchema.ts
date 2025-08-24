import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomWhereInputSchema } from '../inputTypeSchemas/ClassroomWhereInputSchema'
import { ClassroomOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ClassroomOrderByWithAggregationInputSchema'
import { ClassroomScalarFieldEnumSchema } from '../inputTypeSchemas/ClassroomScalarFieldEnumSchema'
import { ClassroomScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ClassroomScalarWhereWithAggregatesInputSchema'

export const ClassroomGroupByArgsSchema: z.ZodType<Prisma.ClassroomGroupByArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithAggregationInputSchema.array(),ClassroomOrderByWithAggregationInputSchema ]).optional(),
  by: ClassroomScalarFieldEnumSchema.array(),
  having: ClassroomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ClassroomGroupByArgsSchema;
