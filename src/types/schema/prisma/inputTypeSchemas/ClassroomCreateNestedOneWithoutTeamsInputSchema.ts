import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateOrConnectWithoutTeamsInputSchema } from "./ClassroomCreateOrConnectWithoutTeamsInputSchema"
import { ClassroomCreateWithoutTeamsInputSchema } from "./ClassroomCreateWithoutTeamsInputSchema"
import { ClassroomUncheckedCreateWithoutTeamsInputSchema } from "./ClassroomUncheckedCreateWithoutTeamsInputSchema"
import { ClassroomWhereUniqueInputSchema } from "./ClassroomWhereUniqueInputSchema"

export const ClassroomCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutTeamsInput> = z.object({
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  create: z.union([z.lazy(() => ClassroomCreateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema)]).optional(),
}).strict()

export default ClassroomCreateNestedOneWithoutTeamsInputSchema
