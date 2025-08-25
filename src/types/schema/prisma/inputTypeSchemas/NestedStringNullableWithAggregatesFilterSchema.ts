import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedIntNullableFilterSchema } from "./NestedIntNullableFilterSchema"
import { NestedStringNullableFilterSchema } from "./NestedStringNullableFilterSchema"

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  contains: z.string().optional(),
  endsWith: z.string().optional(),
  equals: z.string().optional().nullable(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  in: z.string().array().optional().nullable(),
  isSet: z.boolean().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  startsWith: z.string().optional(),
}).strict()

export default NestedStringNullableWithAggregatesFilterSchema
