import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CakeRequestItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CakeRequestItemsCountOrderByAggregateInputSchema;
