import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateNestedOneWithoutOrderItemsInputSchema } from "./OrderCreateNestedOneWithoutOrderItemsInputSchema"
import { ProductCreateNestedOneWithoutOrderItemsInputSchema } from "./ProductCreateNestedOneWithoutOrderItemsInputSchema"

export const OrderItemCreateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutCakeRequestItemsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  pound: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateWithoutCakeRequestItemsInputSchema
