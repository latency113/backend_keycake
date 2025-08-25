import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema"
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateNestedOneWithoutCakeRequestItemsInput> = z.object({
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema)]).optional(),
}).strict()

export default OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema
