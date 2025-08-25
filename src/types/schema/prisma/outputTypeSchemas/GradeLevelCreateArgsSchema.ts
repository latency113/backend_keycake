import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelCreateInputSchema } from "../inputTypeSchemas/GradeLevelCreateInputSchema"
import { GradeLevelIncludeSchema } from "../inputTypeSchemas/GradeLevelIncludeSchema"
import { GradeLevelUncheckedCreateInputSchema } from "../inputTypeSchemas/GradeLevelUncheckedCreateInputSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { GradeLevelCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeLevelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
}).strict()

export const GradeLevelCreateArgsSchema: z.ZodType<Prisma.GradeLevelCreateArgs> = z.object({
  data: z.union([GradeLevelCreateInputSchema, GradeLevelUncheckedCreateInputSchema]),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  select: GradeLevelSelectSchema.optional(),
}).strict()

export default GradeLevelCreateArgsSchema
