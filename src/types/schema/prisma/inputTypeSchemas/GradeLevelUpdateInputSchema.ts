import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUpdateManyWithoutGrade_levelNestedInputSchema } from "./ClassroomUpdateManyWithoutGrade_levelNestedInputSchema"
import { EnumGradeLevelTypeFieldUpdateOperationsInputSchema } from "./EnumGradeLevelTypeFieldUpdateOperationsInputSchema"
import { GradeLevelTypeSchema } from "./GradeLevelTypeSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"

export const GradeLevelUpdateInputSchema: z.ZodType<Prisma.GradeLevelUpdateInput> = z.object({
  classroom: z.lazy(() => ClassroomUpdateManyWithoutGrade_levelNestedInputSchema).optional(),
  level: z.union([z.lazy(() => GradeLevelTypeSchema), z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema)]).optional(),
  year: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default GradeLevelUpdateInputSchema
