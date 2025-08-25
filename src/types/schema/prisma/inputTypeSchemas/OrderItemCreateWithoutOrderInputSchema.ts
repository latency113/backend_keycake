import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema"
import { ProductCreateNestedOneWithoutOrderItemsInputSchema } from "./ProductCreateNestedOneWithoutOrderItemsInputSchema"

export const OrderItemCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional(),
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  pound: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateWithoutOrderInputSchema
