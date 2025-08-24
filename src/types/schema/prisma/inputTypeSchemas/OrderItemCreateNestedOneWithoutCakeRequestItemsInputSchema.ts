import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from './OrderItemCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema } from './OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema';
import { OrderItemWhereUniqueInputSchema } from './OrderItemWhereUniqueInputSchema';

export const OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateNestedOneWithoutCakeRequestItemsInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional()
}).strict();

export default OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema;
