import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutTeamInputSchema } from "./OrderCreateWithoutTeamInputSchema"
import { OrderUncheckedCreateWithoutTeamInputSchema } from "./OrderUncheckedCreateWithoutTeamInputSchema"
import { OrderUncheckedUpdateWithoutTeamInputSchema } from "./OrderUncheckedUpdateWithoutTeamInputSchema"
import { OrderUpdateWithoutTeamInputSchema } from "./OrderUpdateWithoutTeamInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutTeamInputSchema), z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema)]),
  update: z.union([z.lazy(() => OrderUpdateWithoutTeamInputSchema), z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderUpsertWithWhereUniqueWithoutTeamInputSchema
