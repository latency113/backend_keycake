import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedManyWithoutDepartmentInputSchema } from "./CakeRequestCreateNestedManyWithoutDepartmentInputSchema"
import { ClassroomCreateNestedManyWithoutDepartmentInputSchema } from "./ClassroomCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentCreateInputSchema: z.ZodType<Prisma.DepartmentCreateInput> = z.object({
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentCreateInputSchema
