import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutClassroomInputSchema } from "./OrderCreateWithoutClassroomInputSchema"
import { OrderUncheckedCreateWithoutClassroomInputSchema } from "./OrderUncheckedCreateWithoutClassroomInputSchema"
import { OrderUncheckedUpdateWithoutClassroomInputSchema } from "./OrderUncheckedUpdateWithoutClassroomInputSchema"
import { OrderUpdateWithoutClassroomInputSchema } from "./OrderUpdateWithoutClassroomInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema)]),
  update: z.union([z.lazy(() => OrderUpdateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderUpsertWithWhereUniqueWithoutClassroomInputSchema
