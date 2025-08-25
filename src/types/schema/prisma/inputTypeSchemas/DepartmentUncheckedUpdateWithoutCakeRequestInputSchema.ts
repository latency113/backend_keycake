import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema } from "./ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutCakeRequestInput> = z.object({
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUncheckedUpdateWithoutCakeRequestInputSchema
