import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomListRelationFilterSchema } from "./ClassroomListRelationFilterSchema"
import { EnumGradeLevelTypeFilterSchema } from "./EnumGradeLevelTypeFilterSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const GradeLevelWhereInputSchema: z.ZodType<Prisma.GradeLevelWhereInput> = z.object({
  AND: z.union([z.lazy(() => GradeLevelWhereInputSchema), z.lazy(() => GradeLevelWhereInputSchema).array()]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  level: z.union([z.lazy(() => EnumGradeLevelTypeFilterSchema), z.lazy(() => GradeLevelTypeSchema)]).optional(),
  NOT: z.union([z.lazy(() => GradeLevelWhereInputSchema), z.lazy(() => GradeLevelWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  year: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
}).strict()

export default GradeLevelWhereInputSchema
