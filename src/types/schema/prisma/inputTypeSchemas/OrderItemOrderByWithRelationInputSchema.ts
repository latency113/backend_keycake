import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsOrderByRelationAggregateInputSchema } from "./CakeRequestItemsOrderByRelationAggregateInputSchema"
import { OrderOrderByWithRelationInputSchema } from "./OrderOrderByWithRelationInputSchema"
import { ProductOrderByWithRelationInputSchema } from "./ProductOrderByWithRelationInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default OrderItemOrderByWithRelationInputSchema
