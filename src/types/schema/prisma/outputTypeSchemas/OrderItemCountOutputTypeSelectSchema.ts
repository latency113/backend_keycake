import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OrderItemCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderItemCountOutputTypeSelect> = z.object({
  CakeRequestItems: z.boolean().optional(),
}).strict();

export default OrderItemCountOutputTypeSelectSchema;
