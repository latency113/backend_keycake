import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemWhereUniqueInputSchema } from './OrderItemWhereUniqueInputSchema';
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from './OrderItemCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema';

export const OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutCakeRequestItemsInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]),
}).strict();

export default OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema;
