import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/ProductUncheckedUpdateManyInputSchema"
import { ProductUpdateManyMutationInputSchema } from "../inputTypeSchemas/ProductUpdateManyMutationInputSchema"
import { ProductWhereInputSchema } from "../inputTypeSchemas/ProductWhereInputSchema"

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ProductUpdateManyMutationInputSchema, ProductUncheckedUpdateManyInputSchema]),
  limit: z.number().optional(),
  where: ProductWhereInputSchema.optional(),
}).strict()

export default ProductUpdateManyArgsSchema
