import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { NestedEnumGradeLevelTypeFilterSchema } from "./NestedEnumGradeLevelTypeFilterSchema"

export const EnumGradeLevelTypeFilterSchema: z.ZodType<Prisma.EnumGradeLevelTypeFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => NestedEnumGradeLevelTypeFilterSchema)]).optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
}).strict()

export default EnumGradeLevelTypeFilterSchema
