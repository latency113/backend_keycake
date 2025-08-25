import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutClassroomInputSchema } from "./OrderCreateWithoutClassroomInputSchema"
import { OrderUncheckedCreateWithoutClassroomInputSchema } from "./OrderUncheckedCreateWithoutClassroomInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderCreateOrConnectWithoutClassroomInputSchema
