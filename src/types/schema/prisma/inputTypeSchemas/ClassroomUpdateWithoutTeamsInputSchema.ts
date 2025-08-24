import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema';
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from './GradeLevelUpdateOneWithoutClassroomNestedInputSchema';
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from './OrderUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutTeamsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUpdateWithoutTeamsInputSchema;
