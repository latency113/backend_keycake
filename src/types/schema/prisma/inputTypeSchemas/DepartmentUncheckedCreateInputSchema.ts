import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema';
import { CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema } from './CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentUncheckedCreateInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentUncheckedCreateInputSchema;
