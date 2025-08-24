import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ProductScalarRelationFilterSchema } from './ProductScalarRelationFilterSchema';
import { ProductWhereInputSchema } from './ProductWhereInputSchema';
import { CakeRequestScalarRelationFilterSchema } from './CakeRequestScalarRelationFilterSchema';
import { CakeRequestWhereInputSchema } from './CakeRequestWhereInputSchema';
import { OrderItemScalarRelationFilterSchema } from './OrderItemScalarRelationFilterSchema';
import { OrderItemWhereInputSchema } from './OrderItemWhereInputSchema';

export const CakeRequestItemsWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  request: z.union([ z.lazy(() => CakeRequestScalarRelationFilterSchema),z.lazy(() => CakeRequestWhereInputSchema) ]).optional(),
  orderItem: z.union([ z.lazy(() => OrderItemScalarRelationFilterSchema),z.lazy(() => OrderItemWhereInputSchema) ]).optional(),
}).strict();

export default CakeRequestItemsWhereInputSchema;
