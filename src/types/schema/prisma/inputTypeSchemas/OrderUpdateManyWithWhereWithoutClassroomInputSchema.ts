import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderScalarWhereInputSchema } from "./OrderScalarWhereInputSchema"
import { OrderUncheckedUpdateManyWithoutClassroomInputSchema } from "./OrderUncheckedUpdateManyWithoutClassroomInputSchema"
import { OrderUpdateManyMutationInputSchema } from "./OrderUpdateManyMutationInputSchema"

export const OrderUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomInputSchema)]),
  where: z.lazy(() => OrderScalarWhereInputSchema),
}).strict()

export default OrderUpdateManyWithWhereWithoutClassroomInputSchema
