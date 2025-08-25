import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUncheckedUpdateWithoutOrdersInputSchema;
