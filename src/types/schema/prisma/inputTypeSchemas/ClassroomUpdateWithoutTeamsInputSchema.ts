import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from "./DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema"
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from "./GradeLevelUpdateOneWithoutClassroomNestedInputSchema"
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ClassroomUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutTeamsInput> = z.object({
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUpdateWithoutTeamsInputSchema
