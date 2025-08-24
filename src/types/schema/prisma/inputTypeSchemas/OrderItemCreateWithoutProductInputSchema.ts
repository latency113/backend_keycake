import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateNestedOneWithoutOrderItemsInputSchema } from './OrderCreateNestedOneWithoutOrderItemsInputSchema';
import { CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema } from './CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema';

export const OrderItemCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = z.object({
  id: z.string().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export default OrderItemCreateWithoutProductInputSchema;
