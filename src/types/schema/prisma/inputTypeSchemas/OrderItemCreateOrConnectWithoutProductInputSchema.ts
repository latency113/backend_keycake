import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateWithoutProductInputSchema } from "./OrderItemCreateWithoutProductInputSchema"
import { OrderItemUncheckedCreateWithoutProductInputSchema } from "./OrderItemUncheckedCreateWithoutProductInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput> = z.object({
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema)]),
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
}).strict()

export default OrderItemCreateOrConnectWithoutProductInputSchema
