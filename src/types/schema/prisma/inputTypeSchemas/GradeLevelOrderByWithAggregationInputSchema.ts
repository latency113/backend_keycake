import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { GradeLevelCountOrderByAggregateInputSchema } from './GradeLevelCountOrderByAggregateInputSchema';
import { GradeLevelAvgOrderByAggregateInputSchema } from './GradeLevelAvgOrderByAggregateInputSchema';
import { GradeLevelMaxOrderByAggregateInputSchema } from './GradeLevelMaxOrderByAggregateInputSchema';
import { GradeLevelMinOrderByAggregateInputSchema } from './GradeLevelMinOrderByAggregateInputSchema';
import { GradeLevelSumOrderByAggregateInputSchema } from './GradeLevelSumOrderByAggregateInputSchema';

export const GradeLevelOrderByWithAggregationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GradeLevelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GradeLevelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GradeLevelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GradeLevelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GradeLevelSumOrderByAggregateInputSchema).optional()
}).strict();

export default GradeLevelOrderByWithAggregationInputSchema;
