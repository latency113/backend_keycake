import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DepartmentCountOrderByAggregateInputSchema } from './DepartmentCountOrderByAggregateInputSchema';
import { DepartmentMaxOrderByAggregateInputSchema } from './DepartmentMaxOrderByAggregateInputSchema';
import { DepartmentMinOrderByAggregateInputSchema } from './DepartmentMinOrderByAggregateInputSchema';

export const DepartmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputSchema).optional()
}).strict();

export default DepartmentOrderByWithAggregationInputSchema;
