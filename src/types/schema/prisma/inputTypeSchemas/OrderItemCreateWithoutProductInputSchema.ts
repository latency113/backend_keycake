import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema"
import { OrderCreateNestedOneWithoutOrderItemsInputSchema } from "./OrderCreateNestedOneWithoutOrderItemsInputSchema"

export const OrderItemCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional(),
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  pound: z.number().int(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateWithoutProductInputSchema
