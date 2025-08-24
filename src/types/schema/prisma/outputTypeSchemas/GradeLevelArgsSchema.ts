import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelSelectSchema } from '../inputTypeSchemas/GradeLevelSelectSchema';
import { GradeLevelIncludeSchema } from '../inputTypeSchemas/GradeLevelIncludeSchema';

export const GradeLevelArgsSchema: z.ZodType<Prisma.GradeLevelDefaultArgs> = z.object({
  select: z.lazy(() => GradeLevelSelectSchema).optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
}).strict();

export default GradeLevelArgsSchema;
