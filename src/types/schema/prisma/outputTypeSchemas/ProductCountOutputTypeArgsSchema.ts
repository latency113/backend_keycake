import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductCountOutputTypeSelectSchema } from "./ProductCountOutputTypeSelectSchema"

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict()

export default ProductCountOutputTypeSelectSchema
