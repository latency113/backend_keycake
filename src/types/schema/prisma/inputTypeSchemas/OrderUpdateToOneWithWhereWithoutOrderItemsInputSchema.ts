import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from "./OrderUncheckedUpdateWithoutOrderItemsInputSchema"
import { OrderUpdateWithoutOrderItemsInputSchema } from "./OrderUpdateWithoutOrderItemsInputSchema"
import { OrderWhereInputSchema } from "./OrderWhereInputSchema"

export const OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemsInput> = z.object({
  data: z.union([z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => OrderWhereInputSchema).optional(),
}).strict()

export default OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema
