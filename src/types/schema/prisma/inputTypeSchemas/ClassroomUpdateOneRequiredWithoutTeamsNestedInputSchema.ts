import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateOrConnectWithoutTeamsInputSchema } from "./ClassroomCreateOrConnectWithoutTeamsInputSchema"
import { ClassroomCreateWithoutTeamsInputSchema } from "./ClassroomCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from "./ClassroomUncheckedCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from "./ClassroomUncheckedUpdateWithoutTeamsInputSchema"
import { ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema } from "./ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema"
import { ClassroomUpdateWithoutTeamsInputSchema } from "./ClassroomUpdateWithoutTeamsInputSchema"
import { ClassroomUpsertWithoutTeamsInputSchema } from "./ClassroomUpsertWithoutTeamsInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneRequiredWithoutTeamsNestedInput> = z.object({
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema)]).optional(),
  update: z.union([z.lazy(() => ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema), z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema)]).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutTeamsInputSchema).optional(),
}).strict()

export default ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema
