import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CakeRequestItemsCountOrderByAggregateInputSchema } from './CakeRequestItemsCountOrderByAggregateInputSchema';
import { CakeRequestItemsMaxOrderByAggregateInputSchema } from './CakeRequestItemsMaxOrderByAggregateInputSchema';
import { CakeRequestItemsMinOrderByAggregateInputSchema } from './CakeRequestItemsMinOrderByAggregateInputSchema';

export const CakeRequestItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeRequestItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestItemsMinOrderByAggregateInputSchema).optional()
}).strict();

export default CakeRequestItemsOrderByWithAggregationInputSchema;
