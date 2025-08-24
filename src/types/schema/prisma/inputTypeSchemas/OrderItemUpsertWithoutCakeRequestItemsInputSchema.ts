import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUpdateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema';
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from './OrderItemCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemWhereInputSchema } from './OrderItemWhereInputSchema';

export const OrderItemUpsertWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpsertWithoutCakeRequestItemsInput> = z.object({
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]),
  where: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export default OrderItemUpsertWithoutCakeRequestItemsInputSchema;
