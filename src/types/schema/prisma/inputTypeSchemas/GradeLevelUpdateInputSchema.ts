import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from './EnumGradeLevelTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ClassroomUpdateManyWithoutGrade_levelNestedInputSchema } from './ClassroomUpdateManyWithoutGrade_levelNestedInputSchema';

export const GradeLevelUpdateInputSchema: z.ZodType<Prisma.GradeLevelUpdateInput> = z.object({
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export default GradeLevelUpdateInputSchema;
