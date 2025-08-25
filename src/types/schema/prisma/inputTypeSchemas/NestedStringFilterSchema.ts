import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  contains: z.string().optional(),
  endsWith: z.string().optional(),
  equals: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  in: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
  notIn: z.string().array().optional(),
  startsWith: z.string().optional(),
}).strict()

export default NestedStringFilterSchema
