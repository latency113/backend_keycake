import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductCreateInputSchema } from "../inputTypeSchemas/ProductCreateInputSchema"
import { ProductIncludeSchema } from "../inputTypeSchemas/ProductIncludeSchema"
import { ProductUncheckedCreateInputSchema } from "../inputTypeSchemas/ProductUncheckedCreateInputSchema"
import { ProductUncheckedUpdateInputSchema } from "../inputTypeSchemas/ProductUncheckedUpdateInputSchema"
import { ProductUpdateInputSchema } from "../inputTypeSchemas/ProductUpdateInputSchema"
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

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  create: z.union([ProductCreateInputSchema, ProductUncheckedCreateInputSchema]),
  include: z.lazy(() => ProductIncludeSchema).optional(),
  select: ProductSelectSchema.optional(),
  update: z.union([ProductUpdateInputSchema, ProductUncheckedUpdateInputSchema]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export default ProductUpsertArgsSchema
