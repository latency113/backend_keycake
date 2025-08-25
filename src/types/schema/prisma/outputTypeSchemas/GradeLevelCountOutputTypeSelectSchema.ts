import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const GradeLevelCountOutputTypeSelectSchema: z.ZodType<Prisma.GradeLevelCountOutputTypeSelect> = z.object({
  classroom: z.boolean().optional(),
}).strict()

export default GradeLevelCountOutputTypeSelectSchema
