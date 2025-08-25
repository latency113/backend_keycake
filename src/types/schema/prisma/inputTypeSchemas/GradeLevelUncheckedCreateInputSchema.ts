import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema } from './ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema';

export const GradeLevelUncheckedCreateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export default GradeLevelUncheckedCreateInputSchema;
