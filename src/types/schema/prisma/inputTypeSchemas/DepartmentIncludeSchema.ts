import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const DepartmentIncludeSchema: z.ZodType<Prisma.DepartmentInclude> = z.object({
}).strict()

export default DepartmentIncludeSchema
