import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput> = z.object({
  id: z.string().optional(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default OrderItemCreateManyOrderInputSchema;
