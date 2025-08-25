import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { OrderUncheckedCreateNestedManyWithoutTeamInputSchema } from "./OrderUncheckedCreateNestedManyWithoutTeamInputSchema"

export const TeamUncheckedCreateInputSchema: z.ZodType<Prisma.TeamUncheckedCreateInput> = z.object({
  classroom_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional(),
}).strict()

export default TeamUncheckedCreateInputSchema
