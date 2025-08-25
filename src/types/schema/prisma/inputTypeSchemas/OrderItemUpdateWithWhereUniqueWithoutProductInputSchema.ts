import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemUncheckedUpdateWithoutProductInputSchema } from "./OrderItemUncheckedUpdateWithoutProductInputSchema"
import { OrderItemUpdateWithoutProductInputSchema } from "./OrderItemUpdateWithoutProductInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput> = z.object({
  data: z.union([z.lazy(() => OrderItemUpdateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemUpdateWithWhereUniqueWithoutProductInputSchema
