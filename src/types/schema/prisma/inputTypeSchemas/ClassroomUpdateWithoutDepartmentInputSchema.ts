import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from './GradeLevelUpdateOneWithoutClassroomNestedInputSchema';
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from './TeamUpdateManyWithoutClassroomNestedInputSchema';
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from './OrderUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutDepartmentInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUpdateWithoutDepartmentInputSchema;
