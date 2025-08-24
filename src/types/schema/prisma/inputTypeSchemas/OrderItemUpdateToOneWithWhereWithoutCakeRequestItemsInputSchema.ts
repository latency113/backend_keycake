import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemWhereInputSchema } from './OrderItemWhereInputSchema';
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUpdateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema';

export const OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]),
}).strict();

export default OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema;
