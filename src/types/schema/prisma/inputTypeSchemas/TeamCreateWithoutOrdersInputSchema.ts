import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateNestedOneWithoutTeamsInputSchema } from "./ClassroomCreateNestedOneWithoutTeamsInputSchema"

export const TeamCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateWithoutOrdersInput> = z.object({
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default TeamCreateWithoutOrdersInputSchema
