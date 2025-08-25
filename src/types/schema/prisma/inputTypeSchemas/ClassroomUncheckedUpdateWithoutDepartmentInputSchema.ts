import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema';
import { OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutDepartmentInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUncheckedUpdateWithoutDepartmentInputSchema;
