import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemIncludeSchema } from "../inputTypeSchemas/OrderItemIncludeSchema"
import { OrderItemOrderByWithRelationInputSchema } from "../inputTypeSchemas/OrderItemOrderByWithRelationInputSchema"
import { OrderItemScalarFieldEnumSchema } from "../inputTypeSchemas/OrderItemScalarFieldEnumSchema"
import { OrderItemWhereInputSchema } from "../inputTypeSchemas/OrderItemWhereInputSchema"
import { OrderItemWhereUniqueInputSchema } from "../inputTypeSchemas/OrderItemWhereUniqueInputSchema"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { OrderItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderItemCountOutputTypeArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => OrderItemCountOutputTypeArgsSchema)]).optional(),
  CakeRequestItems: z.union([z.boolean(), z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  id: z.boolean().optional(),
  order: z.union([z.boolean(), z.lazy(() => OrderArgsSchema)]).optional(),
  order_id: z.boolean().optional(),
  pound: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const OrderItemFindFirstArgsSchema: z.ZodType<Prisma.OrderItemFindFirstArgs> = z.object({
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  distinct: z.union([OrderItemScalarFieldEnumSchema, OrderItemScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
  orderBy: z.union([OrderItemOrderByWithRelationInputSchema.array(), OrderItemOrderByWithRelationInputSchema]).optional(),
  select: OrderItemSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: OrderItemWhereInputSchema.optional(),
}).strict()

export default OrderItemFindFirstArgsSchema
