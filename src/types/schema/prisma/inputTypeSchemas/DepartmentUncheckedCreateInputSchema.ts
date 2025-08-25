import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema"
import { ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentUncheckedCreateInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentUncheckedCreateInputSchema
