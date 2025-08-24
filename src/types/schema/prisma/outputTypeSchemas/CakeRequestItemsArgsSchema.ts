import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsSelectSchema } from '../inputTypeSchemas/CakeRequestItemsSelectSchema';
import { CakeRequestItemsIncludeSchema } from '../inputTypeSchemas/CakeRequestItemsIncludeSchema';

export const CakeRequestItemsArgsSchema: z.ZodType<Prisma.CakeRequestItemsDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestItemsSelectSchema).optional(),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
}).strict();

export default CakeRequestItemsArgsSchema;
