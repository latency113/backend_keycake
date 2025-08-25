import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateManyGrade_levelInputEnvelopeSchema } from "./ClassroomCreateManyGrade_levelInputEnvelopeSchema"
import { ClassroomCreateOrConnectWithoutGrade_levelInputSchema } from "./ClassroomCreateOrConnectWithoutGrade_levelInputSchema"
import { ClassroomCreateWithoutGrade_levelInputSchema } from "./ClassroomCreateWithoutGrade_levelInputSchema"
import { ClassroomUncheckedCreateWithoutGrade_levelInputSchema } from "./ClassroomUncheckedCreateWithoutGrade_levelInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateNestedManyWithoutGrade_levelInput> = z.object({
  connect: z.union([z.lazy(() => ClassroomWhereUniqueInputSchema), z.lazy(() => ClassroomWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema), z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array()]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
}).strict()

export default ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema
