import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutDepartmentInputSchema } from "./ClassroomCreateWithoutDepartmentInputSchema"
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateWithoutDepartmentInputSchema"
import { ClassroomUncheckedUpdateWithoutDepartmentInputSchema } from "./ClassroomUncheckedUpdateWithoutDepartmentInputSchema"
import { ClassroomUpdateWithoutDepartmentInputSchema } from "./ClassroomUpdateWithoutDepartmentInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema)]),
  update: z.union([z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema
