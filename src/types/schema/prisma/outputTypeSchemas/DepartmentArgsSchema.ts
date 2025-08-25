import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentIncludeSchema } from "../inputTypeSchemas/DepartmentIncludeSchema"
import { DepartmentSelectSchema } from "../inputTypeSchemas/DepartmentSelectSchema"

export const DepartmentArgsSchema: z.ZodType<Prisma.DepartmentDefaultArgs> = z.object({
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  select: z.lazy(() => DepartmentSelectSchema).optional(),
}).strict()

export default DepartmentArgsSchema
