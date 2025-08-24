import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderWhereInputSchema } from './OrderWhereInputSchema';
import { OrderUpdateWithoutOrderItemsInputSchema } from './OrderUpdateWithoutOrderItemsInputSchema';
import { OrderUncheckedUpdateWithoutOrderItemsInputSchema } from './OrderUncheckedUpdateWithoutOrderItemsInputSchema';

export const OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => OrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]),
}).strict();

export default OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema;
