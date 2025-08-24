import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CakeRequestItemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CakeRequestItemsSumOrderByAggregateInputSchema;
