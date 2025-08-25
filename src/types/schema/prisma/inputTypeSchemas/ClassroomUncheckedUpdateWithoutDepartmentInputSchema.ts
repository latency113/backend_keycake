import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"
import { TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema } from "./TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema"

export const ClassroomUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutDepartmentInput> = z.object({
  grade_level_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUncheckedUpdateWithoutDepartmentInputSchema
