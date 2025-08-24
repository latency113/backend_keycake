import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CakeRequestUpdateManyWithoutDepartmentNestedInputSchema } from './CakeRequestUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutClassroomInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUpdateWithoutClassroomInputSchema;
