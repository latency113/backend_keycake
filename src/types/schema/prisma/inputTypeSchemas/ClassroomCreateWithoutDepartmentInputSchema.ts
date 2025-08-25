import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelCreateNestedOneWithoutClassroomInputSchema } from "./GradeLevelCreateNestedOneWithoutClassroomInputSchema"
import { OrderCreateNestedManyWithoutClassroomInputSchema } from "./OrderCreateNestedManyWithoutClassroomInputSchema"
import { TeamCreateNestedManyWithoutClassroomInputSchema } from "./TeamCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutDepartmentInput> = z.object({
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomCreateWithoutDepartmentInputSchema
