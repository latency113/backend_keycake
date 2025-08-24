import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderBook_numberNumberCompoundUniqueInputSchema } from './OrderBook_numberNumberCompoundUniqueInputSchema';
import { OrderWhereInputSchema } from './OrderWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumOrderStatusFilterSchema } from './EnumOrderStatusFilterSchema';
import { OrderStatusSchema } from './OrderStatusSchema';
import { OrderItemListRelationFilterSchema } from './OrderItemListRelationFilterSchema';
import { TeamNullableScalarRelationFilterSchema } from './TeamNullableScalarRelationFilterSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { ClassroomNullableScalarRelationFilterSchema } from './ClassroomNullableScalarRelationFilterSchema';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  advisor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  team: z.union([ z.lazy(() => TeamNullableScalarRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  classroom: z.union([ z.lazy(() => ClassroomNullableScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional().nullable(),
}).strict());

export default OrderWhereUniqueInputSchema;
