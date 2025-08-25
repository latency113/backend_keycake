import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from './EnumGradeLevelTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const GradeLevelUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateWithoutClassroomInput> = z.object({
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default GradeLevelUncheckedUpdateWithoutClassroomInputSchema;
