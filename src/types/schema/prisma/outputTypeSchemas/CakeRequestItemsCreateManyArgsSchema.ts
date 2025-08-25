import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsCreateManyInputSchema } from '../inputTypeSchemas/CakeRequestItemsCreateManyInputSchema'

export const CakeRequestItemsCreateManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyArgs> = z.object({
  data: z.union([ CakeRequestItemsCreateManyInputSchema,CakeRequestItemsCreateManyInputSchema.array() ]),
}).strict() ;

export default CakeRequestItemsCreateManyArgsSchema;
