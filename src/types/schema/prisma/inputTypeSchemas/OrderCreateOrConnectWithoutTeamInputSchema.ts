import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateWithoutTeamInputSchema } from "./OrderCreateWithoutTeamInputSchema"
import { OrderUncheckedCreateWithoutTeamInputSchema } from "./OrderUncheckedCreateWithoutTeamInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutTeamInput> = z.object({
  create: z.union([z.lazy(() => OrderCreateWithoutTeamInputSchema), z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema)]),
  where: z.lazy(() => OrderWhereUniqueInputSchema),
}).strict()

export default OrderCreateOrConnectWithoutTeamInputSchema
