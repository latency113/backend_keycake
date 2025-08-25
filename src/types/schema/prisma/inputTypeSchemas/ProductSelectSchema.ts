import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
  id: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  name: z.boolean().optional(),
  orderItems: z.union([z.boolean(), z.lazy(() => OrderItemArgsSchema)]).optional(),
  price: z.boolean().optional(),
}).strict()

export default ProductSelectSchema
