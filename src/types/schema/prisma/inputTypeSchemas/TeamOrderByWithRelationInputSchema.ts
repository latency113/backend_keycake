import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ClassroomOrderByWithRelationInputSchema } from './ClassroomOrderByWithRelationInputSchema';
import { OrderOrderByRelationAggregateInputSchema } from './OrderOrderByRelationAggregateInputSchema';

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TeamOrderByWithRelationInputSchema;
