import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeLevelCreateNestedOneWithoutClassroomInputSchema } from './GradeLevelCreateNestedOneWithoutClassroomInputSchema';
import { TeamCreateNestedManyWithoutClassroomInputSchema } from './TeamCreateNestedManyWithoutClassroomInputSchema';
import { OrderCreateNestedManyWithoutClassroomInputSchema } from './OrderCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutDepartmentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomCreateWithoutDepartmentInputSchema;
