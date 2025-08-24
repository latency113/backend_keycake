import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/CakeRequestUpdateManyMutationInputSchema'
import { CakeRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CakeRequestUncheckedUpdateManyInputSchema'
import { CakeRequestWhereInputSchema } from '../inputTypeSchemas/CakeRequestWhereInputSchema'

export const CakeRequestUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestUpdateManyArgs> = z.object({
  data: z.union([ CakeRequestUpdateManyMutationInputSchema,CakeRequestUncheckedUpdateManyInputSchema ]),
  where: CakeRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CakeRequestUpdateManyArgsSchema;
