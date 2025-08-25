import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from "./GradeLevelUncheckedUpdateWithoutClassroomInputSchema"
import { GradeLevelUpdateWithoutClassroomInputSchema } from "./GradeLevelUpdateWithoutClassroomInputSchema"
import { GradeLevelWhereInputSchema } from "./GradeLevelWhereInputSchema"

export const GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  data: z.union([z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => GradeLevelWhereInputSchema).optional(),
}).strict()

export default GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema
