import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateNestedManyWithoutDepartmentInputSchema } from './ClassroomCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutCakeRequestInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentCreateWithoutCakeRequestInputSchema;
