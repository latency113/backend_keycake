import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema } from "./OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"

export const OrderUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutClassroomInput> = z.object({
  advisor: z.string(),
  book_number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  customerName: z.string(),
  deposit: z.number().int(),
  depository: z.string().optional().nullable(),
  id: z.string().optional(),
  number: z.number().int(),
  orderDate: z.coerce.date(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  team_id: z.string().optional().nullable(),
  totalPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderUncheckedCreateWithoutClassroomInputSchema
