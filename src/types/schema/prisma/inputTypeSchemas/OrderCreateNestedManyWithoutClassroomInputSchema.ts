import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateManyClassroomInputEnvelopeSchema } from "./OrderCreateManyClassroomInputEnvelopeSchema"
import { OrderCreateOrConnectWithoutClassroomInputSchema } from "./OrderCreateOrConnectWithoutClassroomInputSchema"
import { OrderCreateWithoutClassroomInputSchema } from "./OrderCreateWithoutClassroomInputSchema"
import { OrderUncheckedCreateWithoutClassroomInputSchema } from "./OrderUncheckedCreateWithoutClassroomInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutClassroomInput> = z.object({
  connect: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema), z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderCreateWithoutClassroomInputSchema), z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
}).strict()

export default OrderCreateNestedManyWithoutClassroomInputSchema
