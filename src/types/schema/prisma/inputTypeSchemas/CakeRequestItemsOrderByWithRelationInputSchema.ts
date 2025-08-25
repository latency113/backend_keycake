import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProductOrderByWithRelationInputSchema } from './ProductOrderByWithRelationInputSchema';
import { CakeRequestOrderByWithRelationInputSchema } from './CakeRequestOrderByWithRelationInputSchema';
import { OrderItemOrderByWithRelationInputSchema } from './OrderItemOrderByWithRelationInputSchema';

export const CakeRequestItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  request: z.lazy(() => CakeRequestOrderByWithRelationInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemOrderByWithRelationInputSchema).optional()
}).strict();

export default CakeRequestItemsOrderByWithRelationInputSchema;
