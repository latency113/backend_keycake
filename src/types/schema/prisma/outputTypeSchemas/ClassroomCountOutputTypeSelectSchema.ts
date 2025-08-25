import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const ClassroomCountOutputTypeSelectSchema: z.ZodType<Prisma.ClassroomCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
  teams: z.boolean().optional(),
}).strict()

export default ClassroomCountOutputTypeSelectSchema
