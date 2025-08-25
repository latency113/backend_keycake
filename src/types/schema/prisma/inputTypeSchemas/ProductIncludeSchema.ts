import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
}).strict()

export default ProductIncludeSchema
