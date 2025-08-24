import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { ClassroomScalarRelationFilterSchema } from './ClassroomScalarRelationFilterSchema';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';
import { OrderListRelationFilterSchema } from './OrderListRelationFilterSchema';

export const TeamWhereInputSchema: z.ZodType<Prisma.TeamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom: z.union([ z.lazy(() => ClassroomScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export default TeamWhereInputSchema;
