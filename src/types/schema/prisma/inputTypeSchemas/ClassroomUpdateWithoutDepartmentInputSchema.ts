import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelUpdateOneWithoutClassroomNestedInputSchema } from "./GradeLevelUpdateOneWithoutClassroomNestedInputSchema"
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from "./TeamUpdateManyWithoutClassroomNestedInputSchema"

export const ClassroomUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutDepartmentInput> = z.object({
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUpdateWithoutDepartmentInputSchema
