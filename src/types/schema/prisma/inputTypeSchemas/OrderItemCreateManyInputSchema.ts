import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const OrderItemCreateManyInputSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  order_id: z.string(),
  pound: z.number().int(),
  product_id: z.string(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateManyInputSchema
