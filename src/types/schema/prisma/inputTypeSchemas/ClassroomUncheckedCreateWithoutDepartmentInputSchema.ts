import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamUncheckedCreateNestedManyWithoutClassroomInputSchema } from './TeamUncheckedCreateNestedManyWithoutClassroomInputSchema';
import { OrderUncheckedCreateNestedManyWithoutClassroomInputSchema } from './OrderUncheckedCreateNestedManyWithoutClassroomInputSchema';

export const ClassroomUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutDepartmentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export default ClassroomUncheckedCreateWithoutDepartmentInputSchema;
