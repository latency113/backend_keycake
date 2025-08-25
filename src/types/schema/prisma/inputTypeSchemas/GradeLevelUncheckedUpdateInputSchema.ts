import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema } from "./ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema"
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from "./EnumGradeLevelTypeFieldUpdateOperationsInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"

export const GradeLevelUncheckedUpdateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateInput> = z.object({
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema).optional(),
  level: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema)]).optional(),
  year: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default GradeLevelUncheckedUpdateInputSchema
