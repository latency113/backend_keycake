import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutCakeRequestItemsInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema
