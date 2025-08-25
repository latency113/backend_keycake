import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema"
import { ProductCreateNestedOneWithoutItemsInputSchema } from "./ProductCreateNestedOneWithoutItemsInputSchema"

export const CakeRequestItemsCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutRequestInput> = z.object({
  id: z.string().optional(),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  quantity: z.number().int(),
}).strict()

export default CakeRequestItemsCreateWithoutRequestInputSchema
