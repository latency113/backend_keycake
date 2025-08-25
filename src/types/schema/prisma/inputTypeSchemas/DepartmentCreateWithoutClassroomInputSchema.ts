import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateNestedManyWithoutDepartmentInputSchema } from './CakeRequestCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutClassroomInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentCreateWithoutClassroomInputSchema;
