import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateManyClassroomInputSchema } from "./OrderCreateManyClassroomInputSchema"

export const OrderCreateManyClassroomInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyClassroomInputEnvelope> = z.object({
  data: z.union([z.lazy(() => OrderCreateManyClassroomInputSchema), z.lazy(() => OrderCreateManyClassroomInputSchema).array()]),
}).strict()

export default OrderCreateManyClassroomInputEnvelopeSchema
