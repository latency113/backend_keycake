import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereInputSchema } from './CakeRequestItemsWhereInputSchema';

export const CakeRequestItemsListRelationFilterSchema: z.ZodType<Prisma.CakeRequestItemsListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestItemsWhereInputSchema).optional()
}).strict();

export default CakeRequestItemsListRelationFilterSchema;
