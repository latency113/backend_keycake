import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema';
import { OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema } from './OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUncheckedUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutGrade_levelInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUncheckedUpdateWithoutGrade_levelInputSchema;
