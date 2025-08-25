import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from './ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutCakeRequestInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUncheckedUpdateWithoutCakeRequestInputSchema;
