import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  price: z.number(),
}).strict()

export default ProductCreateManyInputSchema
