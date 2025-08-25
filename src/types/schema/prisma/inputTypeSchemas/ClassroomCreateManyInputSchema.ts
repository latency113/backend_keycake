import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClassroomCreateManyInputSchema: z.ZodType<Prisma.ClassroomCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string()
}).strict();

export default ClassroomCreateManyInputSchema;
