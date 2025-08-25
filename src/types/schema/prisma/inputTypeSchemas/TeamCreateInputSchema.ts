import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ClassroomCreateNestedOneWithoutTeamsInputSchema } from "./ClassroomCreateNestedOneWithoutTeamsInputSchema"
import { OrderCreateNestedManyWithoutTeamInputSchema } from "./OrderCreateNestedManyWithoutTeamInputSchema"

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.object({
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional(),
}).strict()

export default TeamCreateInputSchema
