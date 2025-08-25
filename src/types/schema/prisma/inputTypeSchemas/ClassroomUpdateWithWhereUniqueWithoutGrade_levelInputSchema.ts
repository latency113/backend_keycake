import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedUpdateWithoutGrade_levelInputSchema"
import { ClassroomUpdateWithoutGrade_levelInputSchema } from "./ClassroomUpdateWithoutGrade_levelInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutGrade_levelInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema
