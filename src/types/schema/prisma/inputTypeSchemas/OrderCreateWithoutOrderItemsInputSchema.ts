import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateNestedOneWithoutOrdersInputSchema } from "./ClassroomCreateNestedOneWithoutOrdersInputSchema"
import { OrderStatusSchema } from "./OrderStatusSchema"
import { TeamCreateNestedOneWithoutOrdersInputSchema } from "./TeamCreateNestedOneWithoutOrdersInputSchema"

export const OrderCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateWithoutOrderItemsInput> = z.object({
  advisor: z.string(),
  book_number: z.number().int(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutOrdersInputSchema).optional(),
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
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  totalPrice: z.number(),
  updatedAt: z.coerce.date().optional(),
}).strict()

export default OrderCreateWithoutOrderItemsInputSchema
