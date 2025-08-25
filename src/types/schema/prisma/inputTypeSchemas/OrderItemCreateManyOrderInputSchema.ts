import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  pound: z.number().int(),
  product_id: z.string(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateManyOrderInputSchema
