import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { DepartmentOrderByWithRelationInputSchema } from './DepartmentOrderByWithRelationInputSchema';
import { GradeLevelOrderByWithRelationInputSchema } from './GradeLevelOrderByWithRelationInputSchema';
import { TeamOrderByRelationAggregateInputSchema } from './TeamOrderByRelationAggregateInputSchema';
import { OrderOrderByRelationAggregateInputSchema } from './OrderOrderByRelationAggregateInputSchema';

export const ClassroomOrderByWithRelationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelOrderByWithRelationInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ClassroomOrderByWithRelationInputSchema;
