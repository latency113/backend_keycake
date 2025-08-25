import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelIncludeSchema } from "../inputTypeSchemas/GradeLevelIncludeSchema"
import { GradeLevelSelectSchema } from "../inputTypeSchemas/GradeLevelSelectSchema"

export const GradeLevelArgsSchema: z.ZodType<Prisma.GradeLevelDefaultArgs> = z.object({
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  select: z.lazy(() => GradeLevelSelectSchema).optional(),
}).strict()

export default GradeLevelArgsSchema
