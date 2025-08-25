import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateManyProductInputEnvelopeSchema } from "./OrderItemCreateManyProductInputEnvelopeSchema"
import { OrderItemCreateOrConnectWithoutProductInputSchema } from "./OrderItemCreateOrConnectWithoutProductInputSchema"
import { OrderItemCreateWithoutProductInputSchema } from "./OrderItemCreateWithoutProductInputSchema"
import { OrderItemScalarWhereInputSchema } from "./OrderItemScalarWhereInputSchema"
import { OrderItemUncheckedCreateWithoutProductInputSchema } from "./OrderItemUncheckedCreateWithoutProductInputSchema"
import { OrderItemUpdateManyWithWhereWithoutProductInputSchema } from "./OrderItemUpdateManyWithWhereWithoutProductInputSchema"
import { OrderItemUpdateWithWhereUniqueWithoutProductInputSchema } from "./OrderItemUpdateWithWhereUniqueWithoutProductInputSchema"
import { OrderItemUpsertWithWhereUniqueWithoutProductInputSchema } from "./OrderItemUpsertWithWhereUniqueWithoutProductInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutProductNestedInput> = z.object({
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputSchema), z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputSchema), z.lazy(() => OrderItemScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
}).strict()

export default OrderItemUpdateManyWithoutProductNestedInputSchema
