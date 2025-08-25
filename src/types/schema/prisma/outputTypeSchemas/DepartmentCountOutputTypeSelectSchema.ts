import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const DepartmentCountOutputTypeSelectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect> = z.object({
  CakeRequest: z.boolean().optional(),
  classroom: z.boolean().optional(),
}).strict()

export default DepartmentCountOutputTypeSelectSchema
