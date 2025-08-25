import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestWhereInputSchema } from './CakeRequestWhereInputSchema';

export const CakeRequestListRelationFilterSchema: z.ZodType<Prisma.CakeRequestListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export default CakeRequestListRelationFilterSchema;
