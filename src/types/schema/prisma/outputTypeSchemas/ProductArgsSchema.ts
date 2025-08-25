import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ProductIncludeSchema } from "../inputTypeSchemas/ProductIncludeSchema"
import { ProductSelectSchema } from "../inputTypeSchemas/ProductSelectSchema"

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  include: z.lazy(() => ProductIncludeSchema).optional(),
  select: z.lazy(() => ProductSelectSchema).optional(),
}).strict()

export default ProductArgsSchema
