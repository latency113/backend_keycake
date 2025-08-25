import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderIncludeSchema } from '../inputTypeSchemas/OrderIncludeSchema'
import { OrderWhereUniqueInputSchema } from '../inputTypeSchemas/OrderWhereUniqueInputSchema'
import { OrderCreateInputSchema } from '../inputTypeSchemas/OrderCreateInputSchema'
import { OrderUncheckedCreateInputSchema } from '../inputTypeSchemas/OrderUncheckedCreateInputSchema'
import { OrderUpdateInputSchema } from '../inputTypeSchemas/OrderUpdateInputSchema'
import { OrderUncheckedUpdateInputSchema } from '../inputTypeSchemas/OrderUncheckedUpdateInputSchema'
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { OrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  id: z.boolean().optional(),
  customerName: z.boolean().optional(),
  classroom_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  orderDate: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  book_number: z.boolean().optional(),
  number: z.boolean().optional(),
  phone: z.boolean().optional(),
  pickup_date: z.boolean().optional(),
  depository: z.boolean().optional(),
  deposit: z.boolean().optional(),
  advisor: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
  where: OrderWhereUniqueInputSchema,
  create: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
  update: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
}).strict() ;

export default OrderUpsertArgsSchema;
