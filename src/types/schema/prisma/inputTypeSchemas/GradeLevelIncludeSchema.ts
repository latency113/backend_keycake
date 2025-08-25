import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const GradeLevelIncludeSchema: z.ZodType<Prisma.GradeLevelInclude> = z.object({
}).strict()

export default GradeLevelIncludeSchema;
