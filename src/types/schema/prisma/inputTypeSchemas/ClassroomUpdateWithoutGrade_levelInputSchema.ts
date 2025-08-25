import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema } from "./DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema"
import { OrderUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"
import { TeamUpdateManyWithoutClassroomNestedInputSchema } from "./TeamUpdateManyWithoutClassroomNestedInputSchema"

export const ClassroomUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutGrade_levelInput> = z.object({
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUpdateWithoutGrade_levelInputSchema
