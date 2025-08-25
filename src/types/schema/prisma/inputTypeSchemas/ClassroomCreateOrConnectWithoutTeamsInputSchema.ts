import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateWithoutTeamsInputSchema } from "./ClassroomCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from "./ClassroomUncheckedCreateWithoutTeamsInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutTeamsInput> = z.object({
  create: z.union([z.lazy(() => ClassroomCreateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema)]),
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
}).strict()

export default ClassroomCreateOrConnectWithoutTeamsInputSchema
