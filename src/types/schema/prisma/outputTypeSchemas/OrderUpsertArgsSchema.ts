import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderCreateInputSchema } from "../inputTypeSchemas/OrderCreateInputSchema"
import { OrderIncludeSchema } from "../inputTypeSchemas/OrderIncludeSchema"
import { OrderUncheckedCreateInputSchema } from "../inputTypeSchemas/OrderUncheckedCreateInputSchema"
import { OrderUncheckedUpdateInputSchema } from "../inputTypeSchemas/OrderUncheckedUpdateInputSchema"
import { OrderUpdateInputSchema } from "../inputTypeSchemas/OrderUpdateInputSchema"
import { OrderWhereUniqueInputSchema } from "../inputTypeSchemas/OrderWhereUniqueInputSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { OrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderCountOutputTypeArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

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

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  create: z.union([OrderCreateInputSchema, OrderUncheckedCreateInputSchema]),
  include: z.lazy(() => OrderIncludeSchema).optional(),
  select: OrderSelectSchema.optional(),
  update: z.union([OrderUpdateInputSchema, OrderUncheckedUpdateInputSchema]),
  where: OrderWhereUniqueInputSchema,
}).strict()

export default OrderUpsertArgsSchema
