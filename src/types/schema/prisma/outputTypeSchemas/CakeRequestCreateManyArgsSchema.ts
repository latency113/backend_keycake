import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestCreateManyInputSchema } from '../inputTypeSchemas/CakeRequestCreateManyInputSchema'

export const CakeRequestCreateManyArgsSchema: z.ZodType<Prisma.CakeRequestCreateManyArgs> = z.object({
  data: z.union([ CakeRequestCreateManyInputSchema,CakeRequestCreateManyInputSchema.array() ]),
}).strict() ;

export default CakeRequestCreateManyArgsSchema;
