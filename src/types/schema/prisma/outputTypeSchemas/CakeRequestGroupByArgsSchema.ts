import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestWhereInputSchema } from '../inputTypeSchemas/CakeRequestWhereInputSchema'
import { CakeRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CakeRequestOrderByWithAggregationInputSchema'
import { CakeRequestScalarFieldEnumSchema } from '../inputTypeSchemas/CakeRequestScalarFieldEnumSchema'
import { CakeRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CakeRequestScalarWhereWithAggregatesInputSchema'

export const CakeRequestGroupByArgsSchema: z.ZodType<Prisma.CakeRequestGroupByArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithAggregationInputSchema.array(),CakeRequestOrderByWithAggregationInputSchema ]).optional(),
  by: CakeRequestScalarFieldEnumSchema.array(),
  having: CakeRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CakeRequestGroupByArgsSchema;
