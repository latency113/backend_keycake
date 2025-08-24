import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateWithoutOrderItemsInputSchema } from './OrderCreateWithoutOrderItemsInputSchema';
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from './OrderUncheckedCreateWithoutOrderItemsInputSchema';
import { OrderCreateOrConnectWithoutOrderItemsInputSchema } from './OrderCreateOrConnectWithoutOrderItemsInputSchema';
import { OrderUpsertWithoutOrderItemsInputSchema } from './OrderUpsertWithoutOrderItemsInputSchema';
import { OrderWhereUniqueInputSchema } from './OrderWhereUniqueInputSchema';
import { OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema } from './OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema';
import { OrderUpdateWithoutOrderItemsInputSchema } from './OrderUpdateWithoutOrderItemsInputSchema';
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from './OrderUncheckedUpdateWithoutOrderItemsInputSchema';

export const OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema),z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]).optional(),
}).strict();

export default OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema;
