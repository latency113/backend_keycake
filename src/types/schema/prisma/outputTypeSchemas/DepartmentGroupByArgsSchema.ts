import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentWhereInputSchema } from '../inputTypeSchemas/DepartmentWhereInputSchema'
import { DepartmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DepartmentOrderByWithAggregationInputSchema'
import { DepartmentScalarFieldEnumSchema } from '../inputTypeSchemas/DepartmentScalarFieldEnumSchema'
import { DepartmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DepartmentScalarWhereWithAggregatesInputSchema'

export const DepartmentGroupByArgsSchema: z.ZodType<Prisma.DepartmentGroupByArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithAggregationInputSchema.array(),DepartmentOrderByWithAggregationInputSchema ]).optional(),
  by: DepartmentScalarFieldEnumSchema.array(),
  having: DepartmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DepartmentGroupByArgsSchema;
