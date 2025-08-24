import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DepartmentScalarRelationFilterSchema } from './DepartmentScalarRelationFilterSchema';
import { DepartmentWhereInputSchema } from './DepartmentWhereInputSchema';
import { GradeLevelNullableScalarRelationFilterSchema } from './GradeLevelNullableScalarRelationFilterSchema';
import { GradeLevelWhereInputSchema } from './GradeLevelWhereInputSchema';
import { TeamListRelationFilterSchema } from './TeamListRelationFilterSchema';
import { OrderListRelationFilterSchema } from './OrderListRelationFilterSchema';

export const ClassroomWhereUniqueInputSchema: z.ZodType<Prisma.ClassroomWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  grade_level: z.union([ z.lazy(() => GradeLevelNullableScalarRelationFilterSchema),z.lazy(() => GradeLevelWhereInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export default ClassroomWhereUniqueInputSchema;
