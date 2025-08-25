import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema } from "./ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"

export const GradeLevelUncheckedCreateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateInput> = z.object({
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema).optional(),
  id: z.string().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
}).strict()

export default GradeLevelUncheckedCreateInputSchema
