import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from "./DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema"
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from "./GradeLevelUpdateOneWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from "./TeamUpdateManyWithoutClassroomNestedInputSchema"

export const ClassroomUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutOrdersInput> = z.object({
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUpdateWithoutOrdersInputSchema
