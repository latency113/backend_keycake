import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateNestedManyWithoutOrderInputSchema } from "./OrderItemCreateNestedManyWithoutOrderInputSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"
import { TeamCreateNestedOneWithoutOrdersInputSchema } from "./TeamCreateNestedOneWithoutOrdersInputSchema"

export const OrderCreateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateWithoutClassroomInput> = z.object({
  advisor: z.string(),
  book_number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  customerName: z.string(),
  deposit: z.number().int(),
  depository: z.string().optional().nullable(),
  id: z.string().optional(),
  number: z.number().int(),
  orderDate: z.coerce.date(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  totalPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderCreateWithoutClassroomInputSchema
