import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateNestedManyWithoutDepartmentInputSchema } from "./ClassroomCreateNestedManyWithoutDepartmentInputSchema"

export const DepartmentCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutCakeRequestInput> = z.object({
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional(),
  group_number: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default DepartmentCreateWithoutCakeRequestInputSchema
