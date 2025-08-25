import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateManyGrade_levelInputEnvelopeSchema } from "./ClassroomCreateManyGrade_levelInputEnvelopeSchema"
import { ClassroomCreateOrConnectWithoutGrade_levelInputSchema } from "./ClassroomCreateOrConnectWithoutGrade_levelInputSchema"
import { ClassroomCreateWithoutGrade_levelInputSchema } from "./ClassroomCreateWithoutGrade_levelInputSchema"
import { ClassroomScalarWhereInputSchema } from "./ClassroomScalarWhereInputSchema"
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedCreateWithoutGrade_levelInputSchema"
import { ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema } from "./ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema"
import { ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema } from "./ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema"
import { ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema } from "./ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInput> = z.object({
  connect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema), z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array()]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ClassroomScalarWhereInputSchema), z.lazy(() => ClassroomScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema).array()]).optional(),
}).strict()

export default ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema
