import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { SortOrderSchema } from "./SortOrderSchema"

export const OrderItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput> = z.object({
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default OrderItemSumOrderByAggregateInputSchema
