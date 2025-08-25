import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateManyProductInputEnvelopeSchema } from "./OrderItemCreateManyProductInputEnvelopeSchema"
import { OrderItemCreateOrConnectWithoutProductInputSchema } from "./OrderItemCreateOrConnectWithoutProductInputSchema"
import { OrderItemCreateWithoutProductInputSchema } from "./OrderItemCreateWithoutProductInputSchema"
import { OrderItemUncheckedCreateWithoutProductInputSchema } from "./OrderItemUncheckedCreateWithoutProductInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutProductInput> = z.object({
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema), z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputSchema), z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
}).strict()

export default OrderItemCreateNestedManyWithoutProductInputSchema
