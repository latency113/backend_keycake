import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedManyWithoutDepartmentInputSchema } from "./CakeRequestCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutClassroomInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentCreateWithoutClassroomInputSchema
