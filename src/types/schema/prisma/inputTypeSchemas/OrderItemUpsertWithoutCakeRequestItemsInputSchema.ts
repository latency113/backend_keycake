import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemWhereInputSchema } from "./OrderItemWhereInputSchema"

export const OrderItemUpsertWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpsertWithoutCakeRequestItemsInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema)]),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema)]),
  where: z.lazy(() => OrderItemWhereInputSchema).optional(),
}).strict()

export default OrderItemUpsertWithoutCakeRequestItemsInputSchema
