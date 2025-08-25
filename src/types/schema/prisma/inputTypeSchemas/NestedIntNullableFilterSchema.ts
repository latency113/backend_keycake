import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  in: z.number().array().optional().nullable(),
  isSet: z.boolean().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
  notIn: z.number().array().optional().nullable(),
}).strict()

export default NestedIntNullableFilterSchema
