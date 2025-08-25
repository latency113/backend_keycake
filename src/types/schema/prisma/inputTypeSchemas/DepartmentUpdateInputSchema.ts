import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUpdateManyWithoutDepartmentNestedInputSchema } from './ClassroomUpdateManyWithoutDepartmentNestedInputSchema';
import { CakeRequestUpdateManyWithoutDepartmentNestedInputSchema } from './CakeRequestUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUpdateInputSchema: z.ZodType<Prisma.DepartmentUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUpdateInputSchema;
