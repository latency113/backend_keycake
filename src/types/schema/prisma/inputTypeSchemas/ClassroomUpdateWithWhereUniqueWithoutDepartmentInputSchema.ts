import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateWithoutDepartmentInputSchema } from "./ClassroomUncheckedUpdateWithoutDepartmentInputSchema"
import { ClassroomUpdateWithoutDepartmentInputSchema } from "./ClassroomUpdateWithoutDepartmentInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema
