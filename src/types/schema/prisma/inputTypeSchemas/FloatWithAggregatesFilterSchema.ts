import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedFloatFilterSchema } from "./NestedFloatFilterSchema"
import { NestedFloatWithAggregatesFilterSchema } from "./NestedFloatWithAggregatesFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  equals: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  in: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedFloatWithAggregatesFilterSchema)]).optional(),
  notIn: z.number().array().optional(),
}).strict()

export default FloatWithAggregatesFilterSchema
