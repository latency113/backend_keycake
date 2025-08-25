import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentWhereInputSchema } from '../inputTypeSchemas/DepartmentWhereInputSchema'
import { DepartmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DepartmentOrderByWithRelationInputSchema'
import { DepartmentWhereUniqueInputSchema } from '../inputTypeSchemas/DepartmentWhereUniqueInputSchema'

export const DepartmentAggregateArgsSchema: z.ZodType<Prisma.DepartmentAggregateArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DepartmentAggregateArgsSchema;
