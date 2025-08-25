import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelCreateWithoutClassroomInputSchema } from "./GradeLevelCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from "./GradeLevelUncheckedCreateWithoutClassroomInputSchema"
import { GradeLevelWhereUniqueInputSchema } from "./GradeLevelWhereUniqueInputSchema"

export const GradeLevelCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateOrConnectWithoutClassroomInput> = z.object({
  create: z.union([z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema)]),
  where: z.lazy(() => GradeLevelWhereUniqueInputSchema),
}).strict()

export default GradeLevelCreateOrConnectWithoutClassroomInputSchema
