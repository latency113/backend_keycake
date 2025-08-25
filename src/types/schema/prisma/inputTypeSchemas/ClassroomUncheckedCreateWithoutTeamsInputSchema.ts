import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./OrderUncheckedCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutTeamsInput> = z.object({
  department_id: z.string(),
  grade_level_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateWithoutTeamsInputSchema
