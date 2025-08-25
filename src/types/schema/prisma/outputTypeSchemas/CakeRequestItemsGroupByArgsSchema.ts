import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsWhereInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereInputSchema'
import { CakeRequestItemsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CakeRequestItemsOrderByWithAggregationInputSchema'
import { CakeRequestItemsScalarFieldEnumSchema } from '../inputTypeSchemas/CakeRequestItemsScalarFieldEnumSchema'
import { CakeRequestItemsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CakeRequestItemsScalarWhereWithAggregatesInputSchema'

export const CakeRequestItemsGroupByArgsSchema: z.ZodType<Prisma.CakeRequestItemsGroupByArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithAggregationInputSchema.array(),CakeRequestItemsOrderByWithAggregationInputSchema ]).optional(),
  by: CakeRequestItemsScalarFieldEnumSchema.array(),
  having: CakeRequestItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CakeRequestItemsGroupByArgsSchema;
