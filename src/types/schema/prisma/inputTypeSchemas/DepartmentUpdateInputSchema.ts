import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUpdateManyWithoutDepartmentNestedInputSchema } from "./CakeRequestUpdateManyWithoutDepartmentNestedInputSchema"
import { ClassroomUpdateManyWithoutDepartmentNestedInputSchema } from "./ClassroomUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUpdateInputSchema: z.ZodType<Prisma.DepartmentUpdateInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUpdateInputSchema
