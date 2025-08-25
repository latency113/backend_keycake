import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProductCreateNestedOneWithoutOrderItemsInputSchema } from './ProductCreateNestedOneWithoutOrderItemsInputSchema';
import { CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema } from './CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema';

export const OrderItemCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput> = z.object({
  id: z.string().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export default OrderItemCreateWithoutOrderInputSchema;
