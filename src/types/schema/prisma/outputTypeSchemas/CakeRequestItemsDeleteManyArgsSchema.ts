import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsWhereInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereInputSchema'

export const CakeRequestItemsDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsDeleteManyArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CakeRequestItemsDeleteManyArgsSchema;
