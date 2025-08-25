import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from "./CakeRequestCreateNestedOneWithoutItemsInputSchema"
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema"
import { ProductCreateNestedOneWithoutItemsInputSchema } from "./ProductCreateNestedOneWithoutItemsInputSchema"

export const CakeRequestItemsCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateInput> = z.object({
  id: z.string().optional(),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  quantity: z.number().int(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema),
}).strict()

export default CakeRequestItemsCreateInputSchema
