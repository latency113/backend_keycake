import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { NestedEnumRequestStatusFilterSchema } from "./NestedEnumRequestStatusFilterSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"

export const EnumRequestStatusFilterSchema: z.ZodType<Prisma.EnumRequestStatusFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([z.lazy(() => RequestStatusSchema), z.lazy(() => NestedEnumRequestStatusFilterSchema)]).optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
}).strict()

export default EnumRequestStatusFilterSchema
