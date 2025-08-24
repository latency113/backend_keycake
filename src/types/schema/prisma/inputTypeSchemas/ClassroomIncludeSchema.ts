import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClassroomIncludeSchema: z.ZodType<Prisma.ClassroomInclude> = z.object({
}).strict()

export default ClassroomIncludeSchema;
