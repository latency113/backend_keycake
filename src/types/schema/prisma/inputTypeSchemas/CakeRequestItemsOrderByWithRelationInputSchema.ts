import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestOrderByWithRelationInputSchema } from "./CakeRequestOrderByWithRelationInputSchema"
import { OrderItemOrderByWithRelationInputSchema } from "./OrderItemOrderByWithRelationInputSchema"
import { ProductOrderByWithRelationInputSchema } from "./ProductOrderByWithRelationInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const CakeRequestItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  orderItem: z.lazy(() => OrderItemOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  request: z.lazy(() => CakeRequestOrderByWithRelationInputSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default CakeRequestItemsOrderByWithRelationInputSchema
