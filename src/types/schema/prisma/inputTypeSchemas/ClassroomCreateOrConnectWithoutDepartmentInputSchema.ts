import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutDepartmentInputSchema } from "./ClassroomCreateWithoutDepartmentInputSchema"
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateWithoutDepartmentInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutDepartmentInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomCreateOrConnectWithoutDepartmentInputSchema
