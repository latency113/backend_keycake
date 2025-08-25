import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateNestedManyWithoutGrade_levelInputSchema } from "./ClassroomCreateNestedManyWithoutGrade_levelInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"

export const GradeLevelCreateInputSchema: z.ZodType<Prisma.GradeLevelCreateInput> = z.object({
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutGrade_levelInputSchema).optional(),
  id: z.string().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
}).strict()

export default GradeLevelCreateInputSchema
