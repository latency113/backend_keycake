import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrderScalarRelationFilterSchema } from './OrderScalarRelationFilterSchema';
import { OrderWhereInputSchema } from './OrderWhereInputSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { CakeRequestItemsListRelationFilterSchema } from './CakeRequestItemsListRelationFilterSchema';

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order: z.union([ z.lazy(() => OrderScalarRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export default OrderItemWhereInputSchema;
