import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateManyClassroomInputEnvelopeSchema } from "./OrderCreateManyClassroomInputEnvelopeSchema"
import { OrderCreateOrConnectWithoutClassroomInputSchema } from "./OrderCreateOrConnectWithoutClassroomInputSchema"
import { OrderCreateWithoutClassroomInputSchema } from "./OrderCreateWithoutClassroomInputSchema"
import { OrderScalarWhereInputSchema } from "./OrderScalarWhereInputSchema"
import { OrderUncheckedCreateWithoutClassroomInputSchema } from "./OrderUncheckedCreateWithoutClassroomInputSchema"
import { OrderUpdateManyWithWhereWithoutClassroomInputSchema } from "./OrderUpdateManyWithWhereWithoutClassroomInputSchema"
import { OrderUpdateWithWhereUniqueWithoutClassroomInputSchema } from "./OrderUpdateWithWhereUniqueWithoutClassroomInputSchema"
import { OrderUpsertWithWhereUniqueWithoutClassroomInputSchema } from "./OrderUpsertWithWhereUniqueWithoutClassroomInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutClassroomNestedInput> = z.object({
  connect: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema), z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderCreateWithoutClassroomInputSchema), z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema), z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderScalarWhereInputSchema), z.lazy(() => OrderScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema), z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema), z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema), z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema).array()]).optional(),
}).strict()

export default OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema
