import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassroomInputSchema } from './DepartmentCreateNestedOneWithoutClassroomInputSchema';
import { GradeLevelCreateNestedOneWithoutClassroomInputSchema } from './GradeLevelCreateNestedOneWithoutClassroomInputSchema';
import { TeamCreateNestedManyWithoutClassroomInputSchema } from './TeamCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomCreateWithoutOrdersInputSchema;
