import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentCountOutputTypeSelectSchema } from './DepartmentCountOutputTypeSelectSchema';

export const DepartmentCountOutputTypeArgsSchema: z.ZodType<Prisma.DepartmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DepartmentCountOutputTypeSelectSchema;
