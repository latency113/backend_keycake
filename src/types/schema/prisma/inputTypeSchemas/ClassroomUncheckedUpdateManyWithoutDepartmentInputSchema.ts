import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutDepartmentInput> = z.object({
  grade_level_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema
