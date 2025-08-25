import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateManyDepartmentInputEnvelopeSchema } from "./ClassroomCreateManyDepartmentInputEnvelopeSchema"
import { ClassroomCreateOrConnectWithoutDepartmentInputSchema } from "./ClassroomCreateOrConnectWithoutDepartmentInputSchema"
import { ClassroomCreateWithoutDepartmentInputSchema } from "./ClassroomCreateWithoutDepartmentInputSchema"
import { ClassroomScalarWhereInputSchema } from "./ClassroomScalarWhereInputSchema"
import { ClassroomUncheckedCreateWithoutDepartmentInputSchema } from "./ClassroomUncheckedCreateWithoutDepartmentInputSchema"
import { ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema } from "./ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema"
import { ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema } from "./ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema"
import { ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema } from "./ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  connect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array()]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClassroomScalarWhereInputSchema), z.lazy(() => ClassroomScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema).array()]).optional(),
}).strict()

export default ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema
