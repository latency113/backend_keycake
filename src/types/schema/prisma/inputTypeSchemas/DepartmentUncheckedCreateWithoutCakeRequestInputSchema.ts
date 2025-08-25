import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutCakeRequestInput> = z.object({
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentUncheckedCreateWithoutCakeRequestInputSchema
