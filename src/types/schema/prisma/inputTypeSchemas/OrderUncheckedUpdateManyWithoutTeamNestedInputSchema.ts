import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateManyTeamInputEnvelopeSchema } from "./OrderCreateManyTeamInputEnvelopeSchema"
import { OrderCreateOrConnectWithoutTeamInputSchema } from "./OrderCreateOrConnectWithoutTeamInputSchema"
import { OrderCreateWithoutTeamInputSchema } from "./OrderCreateWithoutTeamInputSchema"
import { OrderScalarWhereInputSchema } from "./OrderScalarWhereInputSchema"
import { OrderUncheckedCreateWithoutTeamInputSchema } from "./OrderUncheckedCreateWithoutTeamInputSchema"
import { OrderUpdateManyWithWhereWithoutTeamInputSchema } from "./OrderUpdateManyWithWhereWithoutTeamInputSchema"
import { OrderUpdateWithWhereUniqueWithoutTeamInputSchema } from "./OrderUpdateWithWhereUniqueWithoutTeamInputSchema"
import { OrderUpsertWithWhereUniqueWithoutTeamInputSchema } from "./OrderUpsertWithWhereUniqueWithoutTeamInputSchema"
import { OrderWhereUniqueInputSchema } from "./OrderWhereUniqueInputSchema"

export const OrderUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutTeamNestedInput> = z.object({
  connect: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema), z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderCreateWithoutTeamInputSchema), z.lazy(() => OrderCreateWithoutTeamInputSchema).array(), z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema), z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderScalarWhereInputSchema), z.lazy(() => OrderScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrderWhereUniqueInputSchema), z.lazy(() => OrderWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema), z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema), z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema).array()]).optional(),
}).strict()

export default OrderUncheckedUpdateManyWithoutTeamNestedInputSchema
