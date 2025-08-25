import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutCakeRequestInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentUncheckedCreateWithoutCakeRequestInputSchema;
