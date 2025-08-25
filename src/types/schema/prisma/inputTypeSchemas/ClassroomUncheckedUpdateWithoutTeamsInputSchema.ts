import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema } from "./OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const ClassroomUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutTeamsInput> = z.object({
  department_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  grade_level_id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
}).strict()

export default ClassroomUncheckedUpdateWithoutTeamsInputSchema
