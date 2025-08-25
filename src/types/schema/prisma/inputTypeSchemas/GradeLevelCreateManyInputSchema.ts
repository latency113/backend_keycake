import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';

export const GradeLevelCreateManyInputSchema: z.ZodType<Prisma.GradeLevelCreateManyInput> = z.object({
  id: z.string().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export default GradeLevelCreateManyInputSchema;
