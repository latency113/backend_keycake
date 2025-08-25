import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutTeamsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUncheckedUpdateWithoutTeamsInputSchema;
