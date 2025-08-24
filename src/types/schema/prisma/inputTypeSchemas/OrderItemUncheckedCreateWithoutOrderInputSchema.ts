import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema';

export const OrderItemUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput> = z.object({
  id: z.string().optional(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export default OrderItemUncheckedCreateWithoutOrderInputSchema;
