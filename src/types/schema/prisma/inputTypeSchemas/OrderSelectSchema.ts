import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { OrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderCountOutputTypeArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
  advisor: z.boolean().optional(),
  book_number: z.boolean().optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  classroom_id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  customerName: z.boolean().optional(),
  deposit: z.boolean().optional(),
  depository: z.boolean().optional(),
  id: z.boolean().optional(),
  number: z.boolean().optional(),
  orderDate: z.boolean().optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemArgsSchema)]).optional(),
  phone: z.boolean().optional(),
  pickup_date: z.boolean().optional(),
  status: z.boolean().optional(),
  team: z.union([z.boolean(), z.lazy(() => TeamArgsSchema)]).optional(),
  team_id: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default OrderSelectSchema
