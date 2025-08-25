import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedEnumRequestStatusFilterSchema } from "./NestedEnumRequestStatusFilterSchema"
import { NestedIntFilterSchema } from "./NestedIntFilterSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"

export const NestedEnumRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRequestStatusWithAggregatesFilter> = z.object({
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([z.lazy(() => RequestStatusSchema), z.lazy(() => NestedEnumRequestStatusWithAggregatesFilterSchema)]).optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
}).strict()

export default NestedEnumRequestStatusWithAggregatesFilterSchema
