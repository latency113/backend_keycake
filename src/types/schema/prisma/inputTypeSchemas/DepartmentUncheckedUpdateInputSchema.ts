import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from "./CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema"
import { ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from "./ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUncheckedUpdateInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUncheckedUpdateInputSchema
