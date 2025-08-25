import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductWhereInputSchema } from "../inputTypeSchemas/ProductWhereInputSchema"

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  limit: z.number().optional(),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductDeleteManyArgsSchema
