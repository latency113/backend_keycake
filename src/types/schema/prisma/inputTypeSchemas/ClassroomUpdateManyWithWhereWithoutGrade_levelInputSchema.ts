import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomScalarWhereInputSchema } from "./ClassroomScalarWhereInputSchema"
import { ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema } from "./ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema"
import { ClassroomUpdateManyMutationInputSchema } from "./ClassroomUpdateManyMutationInputSchema"

export const ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutGrade_levelInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateManyMutationInputSchema), z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema)]),
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
}).strict()

export default ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema
