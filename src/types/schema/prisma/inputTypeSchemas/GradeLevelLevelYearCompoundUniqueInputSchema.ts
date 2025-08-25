import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';

export const GradeLevelLevelYearCompoundUniqueInputSchema: z.ZodType<Prisma.GradeLevelLevelYearCompoundUniqueInput> = z.object({
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number()
}).strict();

export default GradeLevelLevelYearCompoundUniqueInputSchema;
