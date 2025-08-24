import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemIncludeSchema } from '../inputTypeSchemas/OrderItemIncludeSchema'
import { OrderItemWhereUniqueInputSchema } from '../inputTypeSchemas/OrderItemWhereUniqueInputSchema'
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { OrderItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrderItemCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  pound: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  CakeRequestItems: z.union([z.boolean(),z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderItemFindUniqueArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export default OrderItemFindUniqueArgsSchema;
