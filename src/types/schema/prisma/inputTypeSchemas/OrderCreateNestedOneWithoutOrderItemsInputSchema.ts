import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateOrConnectWithoutOrderItemsInputSchema } from "./OrderCreateOrConnectWithoutOrderItemsInputSchema"
import { OrderCreateWithoutOrderItemsInputSchema } from "./OrderCreateWithoutOrderItemsInputSchema"
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from "./OrderUncheckedCreateWithoutOrderItemsInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrderItemsInput> = z.object({
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  create: z.union([z.lazy(() => OrderCreateWithoutOrderItemsInputSchema), z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema)]).optional(),
}).strict()

export default OrderCreateNestedOneWithoutOrderItemsInputSchema
