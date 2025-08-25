import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const ClassroomCreateManyInputSchema: z.ZodType<Prisma.ClassroomCreateManyInput> = z.object({
  department_id: z.string(),
  grade_level_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default ClassroomCreateManyInputSchema
