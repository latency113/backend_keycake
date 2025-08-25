import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const ClassroomCreateManyDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateManyDepartmentInput> = z.object({
  grade_level_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default ClassroomCreateManyDepartmentInputSchema
