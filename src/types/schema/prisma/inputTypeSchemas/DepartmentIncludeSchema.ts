import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const DepartmentIncludeSchema: z.ZodType<Prisma.DepartmentInclude> = z.object({
}).strict()

export default DepartmentIncludeSchema;
