import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomOrderByWithRelationInputSchema } from "./ClassroomOrderByWithRelationInputSchema"
import { OrderItemOrderByRelationAggregateInputSchema } from "./OrderItemOrderByRelationAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"
import { TeamOrderByWithRelationInputSchema } from "./TeamOrderByWithRelationInputSchema"

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  advisor: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default OrderOrderByWithRelationInputSchema
