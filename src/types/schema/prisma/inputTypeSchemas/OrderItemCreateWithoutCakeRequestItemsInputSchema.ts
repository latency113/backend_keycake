import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderCreateNestedOneWithoutOrderItemsInputSchema } from './OrderCreateNestedOneWithoutOrderItemsInputSchema';
import { ProductCreateNestedOneWithoutOrderItemsInputSchema } from './ProductCreateNestedOneWithoutOrderItemsInputSchema';

export const OrderItemCreateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutCakeRequestItemsInput> = z.object({
  id: z.string().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export default OrderItemCreateWithoutCakeRequestItemsInputSchema;
