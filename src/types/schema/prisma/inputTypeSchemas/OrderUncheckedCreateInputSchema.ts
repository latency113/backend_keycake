import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderStatusSchema } from './OrderStatusSchema';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema';

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export default OrderUncheckedCreateInputSchema;
