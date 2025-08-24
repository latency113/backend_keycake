import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutClassroomInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUncheckedUpdateWithoutClassroomInputSchema;
