import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DepartmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DepartmentCountOrderByAggregateInputSchema;
