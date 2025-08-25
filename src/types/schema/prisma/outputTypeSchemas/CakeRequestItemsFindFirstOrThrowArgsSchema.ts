import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsIncludeSchema } from "../inputTypeSchemas/CakeRequestItemsIncludeSchema"
import { CakeRequestItemsOrderByWithRelationInputSchema } from "../inputTypeSchemas/CakeRequestItemsOrderByWithRelationInputSchema"
import { CakeRequestItemsScalarFieldEnumSchema } from "../inputTypeSchemas/CakeRequestItemsScalarFieldEnumSchema"
import { CakeRequestItemsWhereInputSchema } from "../inputTypeSchemas/CakeRequestItemsWhereInputSchema"
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

export const CakeRequestItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindFirstOrThrowArgs> = z.object({
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  distinct: z.union([CakeRequestItemsScalarFieldEnumSchema, CakeRequestItemsScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
  orderBy: z.union([CakeRequestItemsOrderByWithRelationInputSchema.array(), CakeRequestItemsOrderByWithRelationInputSchema]).optional(),
  select: CakeRequestItemsSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
}).strict()

export default CakeRequestItemsFindFirstOrThrowArgsSchema
