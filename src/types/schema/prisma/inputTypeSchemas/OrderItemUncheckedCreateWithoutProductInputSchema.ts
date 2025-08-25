import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema"

export const OrderItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional(),
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  order_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemUncheckedCreateWithoutProductInputSchema
