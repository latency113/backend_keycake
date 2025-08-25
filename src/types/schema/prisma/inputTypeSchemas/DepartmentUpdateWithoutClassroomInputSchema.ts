import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUpdateManyWithoutDepartmentNestedInputSchema } from "./CakeRequestUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutClassroomInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUpdateWithoutClassroomInputSchema
