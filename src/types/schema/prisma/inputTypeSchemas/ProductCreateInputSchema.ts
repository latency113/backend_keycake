import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateNestedManyWithoutProductInputSchema } from "./CakeRequestItemsCreateNestedManyWithoutProductInputSchema"
import { OrderItemCreateNestedManyWithoutProductInputSchema } from "./OrderItemCreateNestedManyWithoutProductInputSchema"

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional(),
  name: z.string(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  price: z.number(),
}).strict()

export default ProductCreateInputSchema
