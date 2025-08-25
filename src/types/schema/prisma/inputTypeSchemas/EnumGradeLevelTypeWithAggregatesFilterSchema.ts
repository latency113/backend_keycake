import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { NestedEnumGradeLevelTypeFilterSchema } from "./NestedEnumGradeLevelTypeFilterSchema"
import { NestedEnumGradeLevelTypeWithAggregatesFilterSchema } from "./NestedEnumGradeLevelTypeWithAggregatesFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"

export const EnumGradeLevelTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGradeLevelTypeWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => NestedEnumGradeLevelTypeWithAggregatesFilterSchema)]).optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
}).strict()

export default EnumGradeLevelTypeWithAggregatesFilterSchema
