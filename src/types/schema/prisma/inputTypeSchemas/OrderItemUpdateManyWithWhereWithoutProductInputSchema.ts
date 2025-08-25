import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemScalarWhereInputSchema } from "./OrderItemScalarWhereInputSchema"
import { OrderItemUncheckedUpdateManyWithoutProductInputSchema } from "./OrderItemUncheckedUpdateManyWithoutProductInputSchema"
import { OrderItemUpdateManyMutationInputSchema } from "./OrderItemUpdateManyMutationInputSchema"

export const OrderItemUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductInput> = z.object({
  data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductInputSchema)]),
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
}).strict()

export default OrderItemUpdateManyWithWhereWithoutProductInputSchema
