import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from "./CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutClassroomInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUncheckedUpdateWithoutClassroomInputSchema
