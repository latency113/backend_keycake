import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateWithoutTeamInputSchema } from "./OrderUncheckedUpdateWithoutTeamInputSchema"
import { OrderUpdateWithoutTeamInputSchema } from "./OrderUpdateWithoutTeamInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  data: z.union([z.lazy(() => OrderUpdateWithoutTeamInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderUpdateWithWhereUniqueWithoutTeamInputSchema
