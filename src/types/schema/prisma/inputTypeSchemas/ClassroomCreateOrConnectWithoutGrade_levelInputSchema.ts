import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutGrade_levelInputSchema } from "./ClassroomCreateWithoutGrade_levelInputSchema"
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedCreateWithoutGrade_levelInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateOrConnectWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutGrade_levelInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomCreateOrConnectWithoutGrade_levelInputSchema
