import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClassroomCreateManyDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateManyDepartmentInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  grade_level_id: z.string()
}).strict();

export default ClassroomCreateManyDepartmentInputSchema;
