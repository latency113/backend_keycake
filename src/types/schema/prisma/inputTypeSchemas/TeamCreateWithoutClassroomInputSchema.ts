import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderCreateNestedManyWithoutTeamInputSchema } from "./OrderCreateNestedManyWithoutTeamInputSchema"

export const TeamCreateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateWithoutClassroomInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional(),
}).strict()

export default TeamCreateWithoutClassroomInputSchema
