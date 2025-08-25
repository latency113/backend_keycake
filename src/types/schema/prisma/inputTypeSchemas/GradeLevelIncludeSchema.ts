import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const GradeLevelIncludeSchema: z.ZodType<Prisma.GradeLevelInclude> = z.object({
}).strict()

export default GradeLevelIncludeSchema
