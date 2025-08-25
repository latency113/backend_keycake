import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const GradeLevelCountOutputTypeSelectSchema: z.ZodType<Prisma.GradeLevelCountOutputTypeSelect> = z.object({
  classroom: z.boolean().optional(),
}).strict();

export default GradeLevelCountOutputTypeSelectSchema;
