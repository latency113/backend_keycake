import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const ClassroomCreateManyGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateManyGrade_levelInput> = z.object({
  department_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default ClassroomCreateManyGrade_levelInputSchema
