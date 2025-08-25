import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateManyOrderInputEnvelopeSchema } from "./OrderItemCreateManyOrderInputEnvelopeSchema"
import { OrderItemCreateOrConnectWithoutOrderInputSchema } from "./OrderItemCreateOrConnectWithoutOrderInputSchema"
import { OrderItemCreateWithoutOrderInputSchema } from "./OrderItemCreateWithoutOrderInputSchema"
import { OrderItemScalarWhereInputSchema } from "./OrderItemScalarWhereInputSchema"
import { OrderItemUncheckedCreateWithoutOrderInputSchema } from "./OrderItemUncheckedCreateWithoutOrderInputSchema"
import { OrderItemUpdateManyWithWhereWithoutOrderInputSchema } from "./OrderItemUpdateManyWithWhereWithoutOrderInputSchema"
import { OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema } from "./OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema"
import { OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema } from "./OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutOrderNestedInput> = z.object({
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema), z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputSchema), z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OrderItemScalarWhereInputSchema), z.lazy(() => OrderItemScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema), z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema), z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema), z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema).array()]).optional(),
}).strict()

export default OrderItemUpdateManyWithoutOrderNestedInputSchema
