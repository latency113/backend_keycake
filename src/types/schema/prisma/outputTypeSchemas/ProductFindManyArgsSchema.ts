import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductIncludeSchema } from "../inputTypeSchemas/ProductIncludeSchema"
import { ProductOrderByWithRelationInputSchema } from "../inputTypeSchemas/ProductOrderByWithRelationInputSchema"
import { ProductScalarFieldEnumSchema } from "../inputTypeSchemas/ProductScalarFieldEnumSchema"
import { ProductWhereInputSchema } from "../inputTypeSchemas/ProductWhereInputSchema"
import { ProductWhereUniqueInputSchema } from "../inputTypeSchemas/ProductWhereUniqueInputSchema"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
  id: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  name: z.boolean().optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemArgsSchema)]).optional(),
  price: z.boolean().optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  cursor: ProductWhereUniqueInputSchema.optional(),
  distinct: z.union([ProductScalarFieldEnumSchema, ProductScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  orderBy: z.union([ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema]).optional(),
  select: ProductSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductFindManyArgsSchema
