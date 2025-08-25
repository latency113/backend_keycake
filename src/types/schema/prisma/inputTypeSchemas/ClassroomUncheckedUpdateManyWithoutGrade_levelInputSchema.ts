import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutGrade_levelInput> = z.object({
  department_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema
