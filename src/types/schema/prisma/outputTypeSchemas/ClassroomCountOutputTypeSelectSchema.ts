import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClassroomCountOutputTypeSelectSchema: z.ZodType<Prisma.ClassroomCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
  orders: z.boolean().optional(),
}).strict();

export default ClassroomCountOutputTypeSelectSchema;
