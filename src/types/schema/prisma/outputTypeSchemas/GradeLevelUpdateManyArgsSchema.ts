import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelUpdateManyMutationInputSchema } from '../inputTypeSchemas/GradeLevelUpdateManyMutationInputSchema'
import { GradeLevelUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/GradeLevelUncheckedUpdateManyInputSchema'
import { GradeLevelWhereInputSchema } from '../inputTypeSchemas/GradeLevelWhereInputSchema'

export const GradeLevelUpdateManyArgsSchema: z.ZodType<Prisma.GradeLevelUpdateManyArgs> = z.object({
  data: z.union([ GradeLevelUpdateManyMutationInputSchema,GradeLevelUncheckedUpdateManyInputSchema ]),
  where: GradeLevelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default GradeLevelUpdateManyArgsSchema;
