import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomListRelationFilterSchema } from "./ClassroomListRelationFilterSchema"
import { EnumGradeLevelTypeFilterSchema } from "./EnumGradeLevelTypeFilterSchema"
import { GradeLevelLevelYearCompoundUniqueInputSchema } from "./GradeLevelLevelYearCompoundUniqueInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { GradeLevelWhereInputSchema } from "./GradeLevelWhereInputSchema"
import { IntFilterSchema } from "./IntFilterSchema"

export const GradeLevelWhereUniqueInputSchema: z.ZodType<Prisma.GradeLevelWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema),
  }),
])
  .and(z.object({
    AND: z.union([z.lazy(() => GradeLevelWhereInputSchema), z.lazy(() => GradeLevelWhereInputSchema).array()]).optional(),
    classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
    id: z.string().optional(),
    level: z.union([z.lazy(() => EnumGradeLevelTypeFilterSchema), z.lazy(() => GradeLevelTypeSchema)]).optional(),
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema).optional(),
    NOT: z.union([z.lazy(() => GradeLevelWhereInputSchema), z.lazy(() => GradeLevelWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
    year: z.union([z.lazy(() => IntFilterSchema), z.number().int()]).optional(),
  }).strict())

export default GradeLevelWhereUniqueInputSchema
