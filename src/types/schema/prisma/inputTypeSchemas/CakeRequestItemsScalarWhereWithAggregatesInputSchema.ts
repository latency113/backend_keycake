import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const CakeRequestItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default CakeRequestItemsScalarWhereWithAggregatesInputSchema;
