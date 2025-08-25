import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClassroomCreateManyGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateManyGrade_levelInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  department_id: z.string()
}).strict();

export default ClassroomCreateManyGrade_levelInputSchema;
