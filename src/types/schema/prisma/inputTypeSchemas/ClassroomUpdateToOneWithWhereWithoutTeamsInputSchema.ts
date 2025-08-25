import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomUncheckedUpdateWithoutTeamsInputSchema } from "./ClassroomUncheckedUpdateWithoutTeamsInputSchema"
import { ClassroomUpdateWithoutTeamsInputSchema } from "./ClassroomUpdateWithoutTeamsInputSchema"
import { ClassroomWhereInputSchema } from "./ClassroomWhereInputSchema"

export const ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  data: z.union([z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema), z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema)]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
}).strict()

export default ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema
