import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutOrderItemsInputSchema } from "./OrderCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from "./OrderUncheckedCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from "./OrderUncheckedUpdateWithoutOrderItemsInputSchema"
import { OrderUpdateWithoutOrderItemsInputSchema } from "./OrderUpdateWithoutOrderItemsInputSchema"
import { OrderWhereInputSchema } from "./OrderWhereInputSchema"

export const OrderUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpsertWithoutOrderItemsInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema)]),
  update: z.union([z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => OrderWhereInputSchema).optional(),
}).strict()

export default OrderUpsertWithoutOrderItemsInputSchema
