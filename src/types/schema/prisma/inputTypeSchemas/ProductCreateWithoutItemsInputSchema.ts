import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateNestedManyWithoutProductInputSchema } from "./OrderItemCreateNestedManyWithoutProductInputSchema"

export const ProductCreateWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutItemsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  price: z.number(),
}).strict()

export default ProductCreateWithoutItemsInputSchema
