import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelCreateManyInputSchema } from '../inputTypeSchemas/GradeLevelCreateManyInputSchema'

export const GradeLevelCreateManyArgsSchema: z.ZodType<Prisma.GradeLevelCreateManyArgs> = z.object({
  data: z.union([ GradeLevelCreateManyInputSchema,GradeLevelCreateManyInputSchema.array() ]),
}).strict() ;

export default GradeLevelCreateManyArgsSchema;
