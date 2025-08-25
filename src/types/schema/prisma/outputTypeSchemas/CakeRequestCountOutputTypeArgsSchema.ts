import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestCountOutputTypeSelectSchema } from './CakeRequestCountOutputTypeSelectSchema';

export const CakeRequestCountOutputTypeArgsSchema: z.ZodType<Prisma.CakeRequestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CakeRequestCountOutputTypeSelectSchema;
