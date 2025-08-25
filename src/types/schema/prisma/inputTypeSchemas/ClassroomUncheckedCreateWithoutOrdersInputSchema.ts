import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamUncheckedCreateNestedManyWithoutClassroomInputSchema } from "./TeamUncheckedCreateNestedManyWithoutClassroomInputSchema"

export const ClassroomUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutOrdersInput> = z.object({
  department_id: z.string(),
  grade_level_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateWithoutOrdersInputSchema
