import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./OrderUncheckedCreateNestedManyWithoutClassroomInputSchema"
import { TeamUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./TeamUncheckedCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutDepartmentInput> = z.object({
  grade_level_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateWithoutDepartmentInputSchema
