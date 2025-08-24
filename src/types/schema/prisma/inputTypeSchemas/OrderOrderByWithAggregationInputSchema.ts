import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OrderCountOrderByAggregateInputSchema } from './OrderCountOrderByAggregateInputSchema';
import { OrderAvgOrderByAggregateInputSchema } from './OrderAvgOrderByAggregateInputSchema';
import { OrderMaxOrderByAggregateInputSchema } from './OrderMaxOrderByAggregateInputSchema';
import { OrderMinOrderByAggregateInputSchema } from './OrderMinOrderByAggregateInputSchema';
import { OrderSumOrderByAggregateInputSchema } from './OrderSumOrderByAggregateInputSchema';

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputSchema).optional()
}).strict();

export default OrderOrderByWithAggregationInputSchema;
