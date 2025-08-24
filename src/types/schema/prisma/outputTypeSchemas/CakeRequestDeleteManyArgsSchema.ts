import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestWhereInputSchema } from '../inputTypeSchemas/CakeRequestWhereInputSchema'

export const CakeRequestDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestDeleteManyArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default CakeRequestDeleteManyArgsSchema;
