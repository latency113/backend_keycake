import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutProductInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutProductInputSchema"

export const ProductCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = z.object({
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional(),
  name: z.string(),
  price: z.number(),
}).strict()

export default ProductCreateWithoutOrderItemsInputSchema
