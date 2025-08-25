import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema';
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from './GradeLevelUpdateOneWithoutClassroomNestedInputSchema';
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from './TeamUpdateManyWithoutClassroomNestedInputSchema';

export const ClassroomUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export default ClassroomUpdateWithoutOrdersInputSchema;
