import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateNestedOneWithoutClassroomInputSchema } from "./DepartmentCreateNestedOneWithoutClassroomInputSchema"
import { OrderCreateNestedManyWithoutClassroomInputSchema } from "./OrderCreateNestedManyWithoutClassroomInputSchema"
import { TeamCreateNestedManyWithoutClassroomInputSchema } from "./TeamCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutGrade_levelInput> = z.object({
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomCreateWithoutGrade_levelInputSchema
