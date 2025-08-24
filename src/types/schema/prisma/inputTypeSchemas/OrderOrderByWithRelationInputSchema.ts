import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OrderItemOrderByRelationAggregateInputSchema } from './OrderItemOrderByRelationAggregateInputSchema';
import { TeamOrderByWithRelationInputSchema } from './TeamOrderByWithRelationInputSchema';
import { ClassroomOrderByWithRelationInputSchema } from './ClassroomOrderByWithRelationInputSchema';

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional()
}).strict();

export default OrderOrderByWithRelationInputSchema;
