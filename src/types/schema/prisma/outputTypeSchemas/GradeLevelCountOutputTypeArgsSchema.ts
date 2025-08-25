import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelCountOutputTypeSelectSchema } from './GradeLevelCountOutputTypeSelectSchema';

export const GradeLevelCountOutputTypeArgsSchema: z.ZodType<Prisma.GradeLevelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GradeLevelCountOutputTypeSelectSchema).nullish(),
}).strict();

export default GradeLevelCountOutputTypeSelectSchema;
