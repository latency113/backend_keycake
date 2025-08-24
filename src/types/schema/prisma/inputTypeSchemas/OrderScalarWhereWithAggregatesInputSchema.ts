import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumOrderStatusWithAggregatesFilterSchema } from './EnumOrderStatusWithAggregatesFilterSchema';
import { OrderStatusSchema } from './OrderStatusSchema';

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  advisor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusWithAggregatesFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default OrderScalarWhereWithAggregatesInputSchema;
