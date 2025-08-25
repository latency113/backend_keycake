import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentSelectSchema } from '../inputTypeSchemas/DepartmentSelectSchema';
import { DepartmentIncludeSchema } from '../inputTypeSchemas/DepartmentIncludeSchema';

export const DepartmentArgsSchema: z.ZodType<Prisma.DepartmentDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentSelectSchema).optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
}).strict();

export default DepartmentArgsSchema;
