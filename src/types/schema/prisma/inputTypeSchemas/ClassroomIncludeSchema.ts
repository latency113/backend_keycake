import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const ClassroomIncludeSchema: z.ZodType<Prisma.ClassroomInclude> = z.object({
}).strict()

export default ClassroomIncludeSchema
