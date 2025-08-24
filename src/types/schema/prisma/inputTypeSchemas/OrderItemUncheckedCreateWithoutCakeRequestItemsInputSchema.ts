import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutCakeRequestItemsInput> = z.object({
  id: z.string().optional(),
  order_id: z.string(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema;
