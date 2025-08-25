import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema';
import { CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUncheckedUpdateInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUncheckedUpdateInputSchema;
