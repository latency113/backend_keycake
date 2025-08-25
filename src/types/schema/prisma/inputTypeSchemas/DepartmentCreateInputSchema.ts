import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateNestedManyWithoutDepartmentInputSchema } from './ClassroomCreateNestedManyWithoutDepartmentInputSchema';
import { CakeRequestCreateNestedManyWithoutDepartmentInputSchema } from './CakeRequestCreateNestedManyWithoutDepartmentInputSchema';

export const DepartmentCreateInputSchema: z.ZodType<Prisma.DepartmentCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export default DepartmentCreateInputSchema;
