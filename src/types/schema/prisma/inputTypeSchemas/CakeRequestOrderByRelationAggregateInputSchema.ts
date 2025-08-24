import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CakeRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CakeRequestOrderByRelationAggregateInputSchema;
