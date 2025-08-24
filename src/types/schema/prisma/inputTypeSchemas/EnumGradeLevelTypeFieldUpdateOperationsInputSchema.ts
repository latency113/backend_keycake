import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelTypeSchema } from './GradeLevelTypeSchema';

export const EnumGradeLevelTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGradeLevelTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GradeLevelTypeSchema).optional()
}).strict();

export default EnumGradeLevelTypeFieldUpdateOperationsInputSchema;
