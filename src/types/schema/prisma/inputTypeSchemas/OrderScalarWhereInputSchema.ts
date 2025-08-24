import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumOrderStatusFilterSchema } from './EnumOrderStatusFilterSchema';
import { OrderStatusSchema } from './OrderStatusSchema';

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  advisor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default OrderScalarWhereInputSchema;
