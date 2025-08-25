import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { GradeLevelCreateOrConnectWithoutClassroomInputSchema } from "./GradeLevelCreateOrConnectWithoutClassroomInputSchema"
import { GradeLevelCreateWithoutClassroomInputSchema } from "./GradeLevelCreateWithoutClassroomInputSchema"
import { GradeLevelUncheckedCreateWithoutClassroomInputSchema } from "./GradeLevelUncheckedCreateWithoutClassroomInputSchema"
import { GradeLevelWhereUniqueInputSchema } from "./GradeLevelWhereUniqueInputSchema"

export const GradeLevelCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateNestedOneWithoutClassroomInput> = z.object({
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  create: z.union([z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema), z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema)]).optional(),
}).strict()

export default GradeLevelCreateNestedOneWithoutClassroomInputSchema
