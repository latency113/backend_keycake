import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { GradeLevelCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeLevelCountOutputTypeArgsSchema"

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
}).strict()

export default GradeLevelSelectSchema
