import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
  orderItems: z.boolean().optional(),
}).strict()

export default ProductCountOutputTypeSelectSchema
