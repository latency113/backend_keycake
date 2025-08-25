import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"
import { DepartmentScalarRelationFilterSchema } from "./DepartmentScalarRelationFilterSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"
import { GradeLevelNullableScalarRelationFilterSchema } from "./GradeLevelNullableScalarRelationFilterSchema"
import { GradeLevelWhereInputSchema } from "./GradeLevelWhereInputSchema"
import { OrderListRelationFilterSchema } from "./OrderListRelationFilterSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { TeamListRelationFilterSchema } from "./TeamListRelationFilterSchema"

export const ClassroomWhereUniqueInputSchema: z.ZodType<Prisma.ClassroomWhereUniqueInput> = z.object({
  id: z.string(),
})
  .and(z.object({
    AND: z.union([z.lazy(() => ClassroomWhereInputSchema), z.lazy(() => ClassroomWhereInputSchema).array()]).optional(),
    department: z.union([z.lazy(() => DepartmentScalarRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema)]).optional(),
    department_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    grade_level: z.union([z.lazy(() => GradeLevelNullableScalarRelationFilterSchema), z.lazy(() => GradeLevelWhereInputSchema)]).optional().nullable(),
    grade_level_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    id: z.string().optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    NOT: z.union([z.lazy(() => ClassroomWhereInputSchema), z.lazy(() => ClassroomWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ClassroomWhereInputSchema).array().optional(),
    orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
    teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  }).strict())

export default ClassroomWhereUniqueInputSchema
