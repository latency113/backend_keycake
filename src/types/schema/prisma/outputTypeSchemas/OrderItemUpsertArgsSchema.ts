import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderItemCreateInputSchema } from "../inputTypeSchemas/OrderItemCreateInputSchema"
import { OrderItemIncludeSchema } from "../inputTypeSchemas/OrderItemIncludeSchema"
import { OrderItemUncheckedCreateInputSchema } from "../inputTypeSchemas/OrderItemUncheckedCreateInputSchema"
import { OrderItemUncheckedUpdateInputSchema } from "../inputTypeSchemas/OrderItemUncheckedUpdateInputSchema"
import { OrderItemUpdateInputSchema } from "../inputTypeSchemas/OrderItemUpdateInputSchema"
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

export const OrderItemUpsertArgsSchema: z.ZodType<Prisma.OrderItemUpsertArgs> = z.object({
  create: z.union([OrderItemCreateInputSchema, OrderItemUncheckedCreateInputSchema]),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
  select: OrderItemSelectSchema.optional(),
  update: z.union([OrderItemUpdateInputSchema, OrderItemUncheckedUpdateInputSchema]),
  where: OrderItemWhereUniqueInputSchema,
}).strict()

export default OrderItemUpsertArgsSchema
