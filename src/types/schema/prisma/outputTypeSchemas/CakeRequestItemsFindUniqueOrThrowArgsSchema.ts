import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestItemsIncludeSchema } from '../inputTypeSchemas/CakeRequestItemsIncludeSchema'
import { CakeRequestItemsWhereUniqueInputSchema } from '../inputTypeSchemas/CakeRequestItemsWhereUniqueInputSchema'
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CakeRequestItemsSelectSchema: z.ZodType<Prisma.CakeRequestItemsSelect> = z.object({
  id: z.boolean().optional(),
  request_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  order_item_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
}).strict()

export const CakeRequestItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindUniqueOrThrowArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict() ;

export default CakeRequestItemsFindUniqueOrThrowArgsSchema;
