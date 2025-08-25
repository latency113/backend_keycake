import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema } from "./CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema"
import { OrderItemUncheckedCreateNestedManyWithoutProductInputSchema } from "./OrderItemUncheckedCreateNestedManyWithoutProductInputSchema"

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  name: z.string(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  price: z.number(),
}).strict()

export default ProductUncheckedCreateInputSchema
