import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsUpdateManyMutationInputSchema } from '../inputTypeSchemas/CakeRequestItemsUpdateManyMutationInputSchema'
import { CakeRequestItemsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CakeRequestItemsUncheckedUpdateManyInputSchema'
import { CakeRequestItemsWhereInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereInputSchema'

export const CakeRequestItemsUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyArgs> = z.object({
  data: z.union([ CakeRequestItemsUpdateManyMutationInputSchema,CakeRequestItemsUncheckedUpdateManyInputSchema ]),
  where: CakeRequestItemsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CakeRequestItemsUpdateManyArgsSchema;
