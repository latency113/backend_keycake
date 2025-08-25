import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from "./DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema"
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from "./GradeLevelUpdateOneWithoutClassroomNestedInputSchema"
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from "./TeamUpdateManyWithoutClassroomNestedInputSchema"

export const ClassroomUpdateInputSchema: z.ZodType<Prisma.ClassroomUpdateInput> = z.object({
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUpdateInputSchema
