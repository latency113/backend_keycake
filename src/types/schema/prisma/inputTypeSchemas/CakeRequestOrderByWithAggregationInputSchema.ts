import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CakeRequestCountOrderByAggregateInputSchema } from './CakeRequestCountOrderByAggregateInputSchema';
import { CakeRequestMaxOrderByAggregateInputSchema } from './CakeRequestMaxOrderByAggregateInputSchema';
import { CakeRequestMinOrderByAggregateInputSchema } from './CakeRequestMinOrderByAggregateInputSchema';

export const CakeRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeRequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestMinOrderByAggregateInputSchema).optional()
}).strict();

export default CakeRequestOrderByWithAggregationInputSchema;
