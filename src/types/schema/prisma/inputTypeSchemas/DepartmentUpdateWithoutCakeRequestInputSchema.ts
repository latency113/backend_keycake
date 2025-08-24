import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ClassroomUpdateManyWithoutDepartmentNestedInputSchema } from './ClassroomUpdateManyWithoutDepartmentNestedInputSchema';

export const DepartmentUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutCakeRequestInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export default DepartmentUpdateWithoutCakeRequestInputSchema;
