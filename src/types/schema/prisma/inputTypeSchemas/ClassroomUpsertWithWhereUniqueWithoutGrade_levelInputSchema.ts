import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutGrade_levelInputSchema } from "./ClassroomCreateWithoutGrade_levelInputSchema"
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedCreateWithoutGrade_levelInputSchema"
import { ClassroomUncheckedUpdateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedUpdateWithoutGrade_levelInputSchema"
import { ClassroomUpdateWithoutGrade_levelInputSchema } from "./ClassroomUpdateWithoutGrade_levelInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutGrade_levelInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema)]),
  update: z.union([z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema
