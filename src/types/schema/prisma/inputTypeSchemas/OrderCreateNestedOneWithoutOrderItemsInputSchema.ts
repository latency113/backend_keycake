import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutOrderItemsInputSchema } from './OrderCreateWithoutOrderItemsInputSchema';
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from './OrderUncheckedCreateWithoutOrderItemsInputSchema';
import { OrderCreateOrConnectWithoutOrderItemsInputSchema } from './OrderCreateOrConnectWithoutOrderItemsInputSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';

export const OrderCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrderItemsInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional()
}).strict();

export default OrderCreateNestedOneWithoutOrderItemsInputSchema;
