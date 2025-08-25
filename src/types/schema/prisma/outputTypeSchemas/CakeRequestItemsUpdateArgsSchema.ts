import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsIncludeSchema } from "../inputTypeSchemas/CakeRequestItemsIncludeSchema"
import { CakeRequestItemsUncheckedUpdateInputSchema } from "../inputTypeSchemas/CakeRequestItemsUncheckedUpdateInputSchema"
import { CakeRequestItemsUpdateInputSchema } from "../inputTypeSchemas/CakeRequestItemsUpdateInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereUniqueInputSchema"
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { ProductArgsSchema } from "../outputTypeSchemas/ProductArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const CakeRequestItemsSelectSchema: z.ZodType<Prisma.CakeRequestItemsSelect> = z.object({
  id: z.boolean().optional(),
  order_item_id: z.boolean().optional(),
  orderItem: z.union([z.boolean(), z.lazy(() => OrderItemArgsSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  request: z.union([z.boolean(), z.lazy(() => CakeRequestArgsSchema)]).optional(),
  request_id: z.boolean().optional(),
}).strict()

export const CakeRequestItemsUpdateArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateArgs> = z.object({
  data: z.union([CakeRequestItemsUpdateInputSchema, CakeRequestItemsUncheckedUpdateInputSchema]),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
  select: CakeRequestItemsSelectSchema.optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict()

export default CakeRequestItemsUpdateArgsSchema
