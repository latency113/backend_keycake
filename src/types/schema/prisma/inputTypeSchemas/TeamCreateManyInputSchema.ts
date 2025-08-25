import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.object({
  classroom_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default TeamCreateManyInputSchema
