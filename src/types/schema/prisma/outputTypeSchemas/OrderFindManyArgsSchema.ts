import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderIncludeSchema } from "../inputTypeSchemas/OrderIncludeSchema"
import { OrderOrderByWithRelationInputSchema } from "../inputTypeSchemas/OrderOrderByWithRelationInputSchema"
import { OrderScalarFieldEnumSchema } from "../inputTypeSchemas/OrderScalarFieldEnumSchema"
import { OrderWhereInputSchema } from "../inputTypeSchemas/OrderWhereInputSchema"
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

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  cursor: OrderWhereUniqueInputSchema.optional(),
  distinct: z.union([OrderScalarFieldEnumSchema, OrderScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
  orderBy: z.union([OrderOrderByWithRelationInputSchema.array(), OrderOrderByWithRelationInputSchema]).optional(),
  select: OrderSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderWhereInputSchema.optional(),
}).strict()

export default OrderFindManyArgsSchema
