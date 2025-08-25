import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestWhereInputSchema } from '../inputTypeSchemas/CakeRequestWhereInputSchema'
import { CakeRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/CakeRequestOrderByWithRelationInputSchema'
import { CakeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CakeRequestWhereUniqueInputSchema'

export const CakeRequestAggregateArgsSchema: z.ZodType<Prisma.CakeRequestAggregateArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CakeRequestAggregateArgsSchema;
