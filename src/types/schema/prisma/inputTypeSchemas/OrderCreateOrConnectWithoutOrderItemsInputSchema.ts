import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutOrderItemsInputSchema } from "./OrderCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from "./OrderUncheckedCreateWithoutOrderItemsInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemsInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderCreateOrConnectWithoutOrderItemsInputSchema
