import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { ClassroomCreateNestedManyWithoutGrade_levelInputSchema } from './ClassroomCreateNestedManyWithoutGrade_levelInputSchema';

export const GradeLevelCreateInputSchema: z.ZodType<Prisma.GradeLevelCreateInput> = z.object({
  id: z.string().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export default GradeLevelCreateInputSchema;
