import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductCreateManyInputSchema } from "../inputTypeSchemas/ProductCreateManyInputSchema"

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ProductCreateManyInputSchema, ProductCreateManyInputSchema.array()]),
}).strict()

export default ProductCreateManyArgsSchema
