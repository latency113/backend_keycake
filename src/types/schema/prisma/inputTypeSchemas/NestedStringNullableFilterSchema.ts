import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  contains: z.string().optional(),
  endsWith: z.string().optional(),
  equals: z.string().optional().nullable(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  in: z.string().array().optional().nullable(),
  isSet: z.boolean().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  startsWith: z.string().optional(),
}).strict()

export default NestedStringNullableFilterSchema
