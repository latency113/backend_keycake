import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutClassroomInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentUncheckedCreateWithoutClassroomInputSchema
