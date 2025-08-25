import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./OrderUncheckedCreateNestedManyWithoutClassroomInputSchema"
import { TeamUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./TeamUncheckedCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomUncheckedCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutGrade_levelInput> = z.object({
  department_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateWithoutGrade_levelInputSchema
