import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateManyDepartmentInputEnvelopeSchema } from "./ClassroomCreateManyDepartmentInputEnvelopeSchema"
import { ClassroomCreateOrConnectWithoutDepartmentInputSchema } from "./ClassroomCreateOrConnectWithoutDepartmentInputSchema"
import { ClassroomCreateWithoutDepartmentInputSchema } from "./ClassroomCreateWithoutDepartmentInputSchema"
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateWithoutDepartmentInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateNestedManyWithoutDepartmentInput> = z.object({
  connect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array()]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema
