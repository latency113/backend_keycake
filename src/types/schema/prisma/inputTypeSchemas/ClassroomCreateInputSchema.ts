import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassroomInputSchema } from './DepartmentCreateNestedOneWithoutClassroomInputSchema';
import { GradeLevelCreateNestedOneWithoutClassroomInputSchema } from './GradeLevelCreateNestedOneWithoutClassroomInputSchema';
import { TeamCreateNestedManyWithoutClassroomInputSchema } from './TeamCreateNestedManyWithoutClassroomInputSchema';
import { OrderCreateNestedManyWithoutClassroomInputSchema } from './OrderCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomCreateInputSchema: z.ZodType<Prisma.ClassroomCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomCreateInputSchema;
