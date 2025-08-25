import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderStatusSchema } from './OrderStatusSchema';

export const OrderCreateManyClassroomInputSchema: z.ZodType<Prisma.OrderCreateManyClassroomInput> = z.object({
  id: z.string().optional(),
  customerName: z.string(),
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
  updatedAt: z.coerce.date().optional()
}).strict();

export default OrderCreateManyClassroomInputSchema;
