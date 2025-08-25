import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderItemCreateWithoutCakeRequestItemsInputSchema } from './OrderItemCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema';
import { OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema } from './OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema';
import { OrderItemUpsertWithoutCakeRequestItemsInputSchema } from './OrderItemUpsertWithoutCakeRequestItemsInputSchema';
import { OrderItemWhereUniqueInputSchema } from './OrderItemWhereUniqueInputSchema';
import { OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema } from './OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema';
import { OrderItemUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUpdateWithoutCakeRequestItemsInputSchema';
import { OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema } from './OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema';

export const OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  upsert: z.lazy(() => OrderItemUpsertWithoutCakeRequestItemsInputSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]).optional(),
}).strict();

export default OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema;
