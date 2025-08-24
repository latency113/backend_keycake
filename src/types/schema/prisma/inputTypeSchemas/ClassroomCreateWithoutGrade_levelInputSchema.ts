import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DepartmentCreateNestedOneWithoutClassroomInputSchema } from './DepartmentCreateNestedOneWithoutClassroomInputSchema';
import { TeamCreateNestedManyWithoutClassroomInputSchema } from './TeamCreateNestedManyWithoutClassroomInputSchema';
import { OrderCreateNestedManyWithoutClassroomInputSchema } from './OrderCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutGrade_levelInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomCreateWithoutGrade_levelInputSchema;
