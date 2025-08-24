import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsWhereInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereInputSchema'
import { CakeRequestItemsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CakeRequestItemsOrderByWithRelationInputSchema'
import { CakeRequestItemsWhereUniqueInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereUniqueInputSchema'

export const CakeRequestItemsAggregateArgsSchema: z.ZodType<Prisma.CakeRequestItemsAggregateArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithRelationInputSchema.array(),CakeRequestItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CakeRequestItemsAggregateArgsSchema;
