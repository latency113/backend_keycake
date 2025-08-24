import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema';
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from './GradeLevelUpdateOneWithoutClassroomNestedInputSchema';
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from './TeamUpdateManyWithoutClassroomNestedInputSchema';
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from './OrderUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUpdateInputSchema: z.ZodType<Prisma.ClassroomUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUpdateInputSchema;
