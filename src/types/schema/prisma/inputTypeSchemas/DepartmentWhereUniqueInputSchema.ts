import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestListRelationFilterSchema } from "./CakeRequestListRelationFilterSchema"
import { ClassroomListRelationFilterSchema } from "./ClassroomListRelationFilterSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const DepartmentWhereUniqueInputSchema: z.ZodType<Prisma.DepartmentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    name: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    name: z.string(),
  }),
])
  .and(z.object({
    AND: z.union([z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array()]).optional(),
    CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional(),
    classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
    group_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    NOT: z.union([z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  }).strict())

export default DepartmentWhereUniqueInputSchema
