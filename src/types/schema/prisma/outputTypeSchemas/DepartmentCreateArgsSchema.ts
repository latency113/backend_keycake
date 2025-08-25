import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { DepartmentCreateInputSchema } from "../inputTypeSchemas/DepartmentCreateInputSchema"
import { DepartmentIncludeSchema } from "../inputTypeSchemas/DepartmentIncludeSchema"
import { DepartmentUncheckedCreateInputSchema } from "../inputTypeSchemas/DepartmentUncheckedCreateInputSchema"
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { DepartmentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DepartmentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const DepartmentSelectSchema: z.ZodType<Prisma.DepartmentSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(), z.lazy(() => CakeRequestArgsSchema)]).optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  group_number: z.boolean().optional(),
  id: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

export const DepartmentCreateArgsSchema: z.ZodType<Prisma.DepartmentCreateArgs> = z.object({
  data: z.union([DepartmentCreateInputSchema, DepartmentUncheckedCreateInputSchema]),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  select: DepartmentSelectSchema.optional(),
}).strict()

export default DepartmentCreateArgsSchema
