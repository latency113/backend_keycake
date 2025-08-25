import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderScalarWhereInputSchema } from "./OrderScalarWhereInputSchema"
import { OrderUncheckedUpdateManyWithoutTeamInputSchema } from "./OrderUncheckedUpdateManyWithoutTeamInputSchema"
import { OrderUpdateManyMutationInputSchema } from "./OrderUpdateManyMutationInputSchema"

export const OrderUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutTeamInput> = z.object({
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutTeamInputSchema)]),
  where: z.lazy(() => OrderScalarWhereInputSchema),
}).strict()

export default OrderUpdateManyWithWhereWithoutTeamInputSchema
