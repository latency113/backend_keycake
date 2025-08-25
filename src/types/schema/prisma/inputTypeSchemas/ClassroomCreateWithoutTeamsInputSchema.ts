import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassroomInputSchema } from './DepartmentCreateNestedOneWithoutClassroomInputSchema';
import { GradeLevelCreateNestedOneWithoutClassroomInputSchema } from './GradeLevelCreateNestedOneWithoutClassroomInputSchema';
import { OrderCreateNestedManyWithoutClassroomInputSchema } from './OrderCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomCreateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutTeamsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomCreateWithoutTeamsInputSchema;
