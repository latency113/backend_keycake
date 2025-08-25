import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const OrderItemCreateManyProductInputSchema: z.ZodType<Prisma.OrderItemCreateManyProductInput> = z.object({
  createdAt: z.coerce.date().optional(),
  id: z.string().optional(),
  order_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  subtotal: z.number(),
  unitPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderItemCreateManyProductInputSchema
