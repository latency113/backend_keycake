import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { NestedEnumGradeLevelTypeFilterSchema } from "./NestedEnumGradeLevelTypeFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"

export const NestedEnumGradeLevelTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGradeLevelTypeWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => NestedEnumGradeLevelTypeWithAggregatesFilterSchema)]).optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
}).strict()

export default NestedEnumGradeLevelTypeWithAggregatesFilterSchema
