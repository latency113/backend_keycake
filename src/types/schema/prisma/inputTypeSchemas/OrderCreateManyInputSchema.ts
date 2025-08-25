import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderStatusSchema } from "./OrderStatusSchema"

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  advisor: z.string(),
  book_number: z.number().int(),
  classroom_id: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  customerName: z.string(),
  deposit: z.number().int(),
  depository: z.string().optional().nullable(),
  id: z.string().optional(),
  number: z.number().int(),
  orderDate: z.coerce.date(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  team_id: z.string().optional().nullable(),
  totalPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderCreateManyInputSchema
