import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentUncheckedCreateWithoutClassroomInputSchema;
