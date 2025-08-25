import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema"
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema"
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema } from "./OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema"
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from "./OrderItemUpdateWithoutCakeRequestItemsInputSchema"
import { OrderItemUpsertWithoutCakeRequestItemsInputSchema } from "./OrderItemUpsertWithoutCakeRequestItemsInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInput> = z.object({
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema)]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema)]).optional(),
  upsert: z.lazy(() => OrderItemUpsertWithoutCakeRequestItemsInputSchema).optional(),
}).strict()

export default OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema
