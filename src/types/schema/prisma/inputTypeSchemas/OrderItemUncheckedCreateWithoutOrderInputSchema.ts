import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema"

export const OrderItemUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional(),
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  pound: z.number().int(),
  product_id: z.string(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemUncheckedCreateWithoutOrderInputSchema
