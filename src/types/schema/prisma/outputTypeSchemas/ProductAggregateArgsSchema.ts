import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductOrderByWithRelationInputSchema } from "../inputTypeSchemas/ProductOrderByWithRelationInputSchema"
import { ProductWhereInputSchema } from "../inputTypeSchemas/ProductWhereInputSchema"
import { ProductWhereUniqueInputSchema } from "../inputTypeSchemas/ProductWhereUniqueInputSchema"

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  cursor: ProductWhereUniqueInputSchema.optional(),
  orderBy: z.union([ProductOrderByWithRelationInputSchema.array(), ProductOrderByWithRelationInputSchema]).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductAggregateArgsSchema
