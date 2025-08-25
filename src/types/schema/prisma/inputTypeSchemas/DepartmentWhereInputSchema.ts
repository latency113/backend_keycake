import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestListRelationFilterSchema } from "./CakeRequestListRelationFilterSchema"
import { ClassroomListRelationFilterSchema } from "./ClassroomListRelationFilterSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const DepartmentWhereInputSchema: z.ZodType<Prisma.DepartmentWhereInput> = z.object({
  AND: z.union([z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array()]).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  group_number: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => DepartmentWhereInputSchema), z.lazy(() => DepartmentWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
}).strict()

export default DepartmentWhereInputSchema
