import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateOrConnectWithoutOrderItemsInputSchema } from "./OrderCreateOrConnectWithoutOrderItemsInputSchema"
import { OrderCreateWithoutOrderItemsInputSchema } from "./OrderCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from "./OrderUncheckedCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from "./OrderUncheckedUpdateWithoutOrderItemsInputSchema"
import { OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema } from "./OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema"
import { OrderUpdateWithoutOrderItemsInputSchema } from "./OrderUpdateWithoutOrderItemsInputSchema"
import { OrderUpsertWithoutOrderItemsInputSchema } from "./OrderUpsertWithoutOrderItemsInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  create: z.union([z.lazy(() => OrderCreateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema)]).optional(),
  update: z.union([z.lazy(() => OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema), z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema)]).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutOrderItemsInputSchema).optional(),
}).strict()

export default OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema
