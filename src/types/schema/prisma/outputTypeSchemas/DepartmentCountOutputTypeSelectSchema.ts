import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DepartmentCountOutputTypeSelectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect> = z.object({
  classroom: z.boolean().optional(),
  CakeRequest: z.boolean().optional(),
}).strict();

export default DepartmentCountOutputTypeSelectSchema;
