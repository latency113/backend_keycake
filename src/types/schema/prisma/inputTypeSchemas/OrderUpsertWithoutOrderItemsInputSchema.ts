import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderUpdateWithoutOrderItemsInputSchema } from './OrderUpdateWithoutOrderItemsInputSchema';
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from './OrderUncheckedUpdateWithoutOrderItemsInputSchema';
import { OrderCreateWithoutOrderItemsInputSchema } from './OrderCreateWithoutOrderItemsInputSchema';
import { OrderUncheckedCreateWithoutOrderItemsInputSchema } from './OrderUncheckedCreateWithoutOrderItemsInputSchema';
import { OrderWhereInputSchema } from './OrderWhereInputSchema';

export const OrderUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpsertWithoutOrderItemsInput> = z.object({
  update: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]),
  where: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export default OrderUpsertWithoutOrderItemsInputSchema;
