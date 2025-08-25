import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderStatusSchema } from './OrderStatusSchema';
import { OrderItemCreateNestedManyWithoutOrderInputSchema } from './OrderItemCreateNestedManyWithoutOrderInputSchema';
import { ClassroomCreateNestedOneWithoutOrdersInputSchema } from './ClassroomCreateNestedOneWithoutOrdersInputSchema';

export const OrderCreateWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateWithoutTeamInput> = z.object({
  id: z.string().optional(),
  customerName: z.string(),
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
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export default OrderCreateWithoutTeamInputSchema;
