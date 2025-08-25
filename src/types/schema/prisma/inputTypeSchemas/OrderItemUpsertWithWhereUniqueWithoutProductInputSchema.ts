import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutProductInputSchema } from "./OrderItemCreateWithoutProductInputSchema"
import { OrderItemUncheckedCreateWithoutProductInputSchema } from "./OrderItemUncheckedCreateWithoutProductInputSchema"
import { OrderItemUncheckedUpdateWithoutProductInputSchema } from "./OrderItemUncheckedUpdateWithoutProductInputSchema"
import { OrderItemUpdateWithoutProductInputSchema } from "./OrderItemUpdateWithoutProductInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema)]),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemUpsertWithWhereUniqueWithoutProductInputSchema
