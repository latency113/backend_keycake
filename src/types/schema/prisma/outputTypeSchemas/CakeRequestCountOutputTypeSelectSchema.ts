import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CakeRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.CakeRequestCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export default CakeRequestCountOutputTypeSelectSchema;
