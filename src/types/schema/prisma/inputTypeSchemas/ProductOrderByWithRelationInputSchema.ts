import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsOrderByRelationAggregateInputSchema } from "./CakeRequestItemsOrderByRelationAggregateInputSchema"
import { OrderItemOrderByRelationAggregateInputSchema } from "./OrderItemOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default ProductOrderByWithRelationInputSchema
