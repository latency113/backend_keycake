import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestSelectSchema } from '../inputTypeSchemas/CakeRequestSelectSchema';
import { CakeRequestIncludeSchema } from '../inputTypeSchemas/CakeRequestIncludeSchema';

export const CakeRequestArgsSchema: z.ZodType<Prisma.CakeRequestDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestSelectSchema).optional(),
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
}).strict();

export default CakeRequestArgsSchema;
