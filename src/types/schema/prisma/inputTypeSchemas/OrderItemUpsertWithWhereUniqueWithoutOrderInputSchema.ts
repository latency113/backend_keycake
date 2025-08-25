import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutOrderInputSchema } from "./OrderItemCreateWithoutOrderInputSchema"
import { OrderItemUncheckedCreateWithoutOrderInputSchema } from "./OrderItemUncheckedCreateWithoutOrderInputSchema"
import { OrderItemUncheckedUpdateWithoutOrderInputSchema } from "./OrderItemUncheckedUpdateWithoutOrderInputSchema"
import { OrderItemUpdateWithoutOrderInputSchema } from "./OrderItemUpdateWithoutOrderInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema)]),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema
