import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderItemCreateManyOrderInputEnvelopeSchema } from "./OrderItemCreateManyOrderInputEnvelopeSchema"
import { OrderItemCreateOrConnectWithoutOrderInputSchema } from "./OrderItemCreateOrConnectWithoutOrderInputSchema"
import { OrderItemCreateWithoutOrderInputSchema } from "./OrderItemCreateWithoutOrderInputSchema"
import { OrderItemUncheckedCreateWithoutOrderInputSchema } from "./OrderItemUncheckedCreateWithoutOrderInputSchema"
import { OrderItemWhereUniqueInputSchema } from "./OrderItemWhereUniqueInputSchema"

export const OrderItemCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutOrderInput> = z.object({
  connect: z.union([z.lazy(() => OrderItemWhereUniqueInputSchema), z.lazy(() => OrderItemWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema), z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => OrderItemCreateWithoutOrderInputSchema), z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema), z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array()]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
}).strict()

export default OrderItemCreateNestedManyWithoutOrderInputSchema
