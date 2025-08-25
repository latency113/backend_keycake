import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutOrderInputSchema } from "./OrderItemCreateWithoutOrderInputSchema"
import { OrderItemUncheckedCreateWithoutOrderInputSchema } from "./OrderItemUncheckedCreateWithoutOrderInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemCreateOrConnectWithoutOrderInputSchema
