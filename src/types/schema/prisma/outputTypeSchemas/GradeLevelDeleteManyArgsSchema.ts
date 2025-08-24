import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelWhereInputSchema } from '../inputTypeSchemas/GradeLevelWhereInputSchema'

export const GradeLevelDeleteManyArgsSchema: z.ZodType<Prisma.GradeLevelDeleteManyArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default GradeLevelDeleteManyArgsSchema;
