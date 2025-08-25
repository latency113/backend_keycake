import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelCreateWithoutClassroomInputSchema } from "./GradeLevelCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from "./GradeLevelUncheckedCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedUpdateWithoutClassroomInputSchema } from "./GradeLevelUncheckedUpdateWithoutClassroomInputSchema"
import { GradeLevelUpdateWithoutClassroomInputSchema } from "./GradeLevelUpdateWithoutClassroomInputSchema"
import { GradeLevelWhereInputSchema } from "./GradeLevelWhereInputSchema"

export const GradeLevelUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpsertWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema)]),
  update: z.union([z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema)]),
  where: z.lazy(() => GradeLevelWhereInputSchema).optional(),
}).strict()

export default GradeLevelUpsertWithoutClassroomInputSchema
