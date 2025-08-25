import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUpdateManyWithoutDepartmentNestedInputSchema } from "./ClassroomUpdateManyWithoutDepartmentNestedInputSchema"
import { StringFieldUpdateOperationsInputSchema } from "./StringFieldUpdateOperationsInputSchema"

export const DepartmentUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutCakeRequestInput> = z.object({
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  group_number: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default DepartmentUpdateWithoutCakeRequestInputSchema
