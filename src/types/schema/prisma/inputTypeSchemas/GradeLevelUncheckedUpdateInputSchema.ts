import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from './EnumGradeLevelTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema } from './ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema';

export const GradeLevelUncheckedUpdateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateInput> = z.object({
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export default GradeLevelUncheckedUpdateInputSchema;
