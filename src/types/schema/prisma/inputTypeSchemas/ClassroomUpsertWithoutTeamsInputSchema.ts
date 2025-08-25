import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutTeamsInputSchema } from "./ClassroomCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from "./ClassroomUncheckedCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from "./ClassroomUncheckedUpdateWithoutTeamsInputSchema"
import { ClassroomUpdateWithoutTeamsInputSchema } from "./ClassroomUpdateWithoutTeamsInputSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutTeamsInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema)]),
  update: z.union([z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema)]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomUpsertWithoutTeamsInputSchema
