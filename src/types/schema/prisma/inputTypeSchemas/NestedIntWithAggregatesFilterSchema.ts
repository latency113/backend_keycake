import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedFloatFilterSchema } from "./NestedFloatFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  equals: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  in: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)]).optional(),
  notIn: z.number().array().optional(),
}).strict()

export default NestedIntWithAggregatesFilterSchema
