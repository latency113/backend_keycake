import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OrderItemCountOrderByAggregateInputSchema } from './OrderItemCountOrderByAggregateInputSchema';
import { OrderItemAvgOrderByAggregateInputSchema } from './OrderItemAvgOrderByAggregateInputSchema';
import { OrderItemMaxOrderByAggregateInputSchema } from './OrderItemMaxOrderByAggregateInputSchema';
import { OrderItemMinOrderByAggregateInputSchema } from './OrderItemMinOrderByAggregateInputSchema';
import { OrderItemSumOrderByAggregateInputSchema } from './OrderItemSumOrderByAggregateInputSchema';

export const OrderItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderItemSumOrderByAggregateInputSchema).optional()
}).strict();

export default OrderItemOrderByWithAggregationInputSchema;
