import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"
import { NestedStringFilterSchema } from "./NestedStringFilterSchema"
import { NestedStringWithAggregatesFilterSchema } from "./NestedStringWithAggregatesFilterSchema"
import { QueryModeSchema } from "./QueryModeSchema"

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  contains: z.string().optional(),
  endsWith: z.string().optional(),
  equals: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  in: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
  notIn: z.string().array().optional(),
  startsWith: z.string().optional(),
}).strict()

export default StringWithAggregatesFilterSchema
