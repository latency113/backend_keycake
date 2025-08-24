import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OrderOrderByWithRelationInputSchema } from './OrderOrderByWithRelationInputSchema';
import { ProductOrderByWithRelationInputSchema } from './ProductOrderByWithRelationInputSchema';
import { CakeRequestItemsOrderByRelationAggregateInputSchema } from './CakeRequestItemsOrderByRelationAggregateInputSchema';

export const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default OrderItemOrderByWithRelationInputSchema;
