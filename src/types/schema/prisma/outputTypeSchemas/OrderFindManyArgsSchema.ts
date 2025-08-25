import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderIncludeSchema } from '../inputTypeSchemas/OrderIncludeSchema'
import { OrderWhereInputSchema } from '../inputTypeSchemas/OrderWhereInputSchema'
import { OrderOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrderOrderByWithRelationInputSchema'
import { OrderWhereUniqueInputSchema } from '../inputTypeSchemas/OrderWhereUniqueInputSchema'
import { OrderScalarFieldEnumSchema } from '../inputTypeSchemas/OrderScalarFieldEnumSchema'
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

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OrderFindManyArgsSchema;
