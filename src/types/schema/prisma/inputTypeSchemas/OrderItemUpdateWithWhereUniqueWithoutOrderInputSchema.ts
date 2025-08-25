import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemUncheckedUpdateWithoutOrderInputSchema } from "./OrderItemUncheckedUpdateWithoutOrderInputSchema"
import { OrderItemUpdateWithoutOrderInputSchema } from "./OrderItemUpdateWithoutOrderInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput> = z.object({
  data: z.union([z.lazy(() => OrderItemUpdateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema
