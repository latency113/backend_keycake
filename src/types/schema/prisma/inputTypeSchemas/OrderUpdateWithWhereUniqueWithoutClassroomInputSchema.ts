import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateWithoutClassroomInputSchema } from "./OrderUncheckedUpdateWithoutClassroomInputSchema"
import { OrderUpdateWithoutClassroomInputSchema } from "./OrderUpdateWithoutClassroomInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => OrderUpdateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderUpdateWithWhereUniqueWithoutClassroomInputSchema
