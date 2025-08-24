import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderCreateWithoutOrderItemsInputSchema } from './OrderCreateWithoutOrderItemsInputSchema';
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from './OrderUncheckedCreateWithoutOrderItemsInputSchema';

export const OrderCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]),
}).strict();

export default OrderCreateOrConnectWithoutOrderItemsInputSchema;
