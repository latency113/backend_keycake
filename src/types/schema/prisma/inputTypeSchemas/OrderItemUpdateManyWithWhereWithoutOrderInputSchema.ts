import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemScalarWhereInputSchema } from "./OrderItemScalarWhereInputSchema"
import { OrderItemUncheckedUpdateManyWithoutOrderInputSchema } from "./OrderItemUncheckedUpdateManyWithoutOrderInputSchema"
import { OrderItemUpdateManyMutationInputSchema } from "./OrderItemUpdateManyMutationInputSchema"

export const OrderItemUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput> = z.object({
  data: z.union([z.lazy(() => OrderItemUpdateManyMutationInputSchema), z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderInputSchema)]),
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
}).strict()

export default OrderItemUpdateManyWithWhereWithoutOrderInputSchema
