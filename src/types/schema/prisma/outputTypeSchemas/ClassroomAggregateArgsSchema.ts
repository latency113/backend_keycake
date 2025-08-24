import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomWhereInputSchema } from '../inputTypeSchemas/ClassroomWhereInputSchema'
import { ClassroomOrderByWithRelationInputSchema } from '../inputTypeSchemas/ClassroomOrderByWithRelationInputSchema'
import { ClassroomWhereUniqueInputSchema } from '../inputTypeSchemas/ClassroomWhereUniqueInputSchema'

export const ClassroomAggregateArgsSchema: z.ZodType<Prisma.ClassroomAggregateArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithRelationInputSchema.array(),ClassroomOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ClassroomAggregateArgsSchema;
