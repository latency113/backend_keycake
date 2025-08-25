import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from "./CakeRequestCreateNestedOneWithoutItemsInputSchema"
import { OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema"

export const CakeRequestItemsCreateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutProductInput> = z.object({
  id: z.string().optional(),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema),
  quantity: z.number().int(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema),
}).strict()

export default CakeRequestItemsCreateWithoutProductInputSchema
