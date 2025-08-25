import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemWhereInputSchema } from "./OrderItemWhereInputSchema"

export const OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInput> = z.object({
  data: z.union([z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema)]),
  where: z.lazy(() => OrderItemWhereInputSchema).optional(),
}).strict()

export default OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema
