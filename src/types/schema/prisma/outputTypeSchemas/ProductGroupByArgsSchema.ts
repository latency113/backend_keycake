import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductOrderByWithAggregationInputSchema } from "../inputTypeSchemas/ProductOrderByWithAggregationInputSchema"
import { ProductScalarFieldEnumSchema } from "../inputTypeSchemas/ProductScalarFieldEnumSchema"
import { ProductScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/ProductScalarWhereWithAggregatesInputSchema"
import { ProductWhereInputSchema } from "../inputTypeSchemas/ProductWhereInputSchema"

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  orderBy: z.union([ProductOrderByWithAggregationInputSchema.array(), ProductOrderByWithAggregationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductGroupByArgsSchema
