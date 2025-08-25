import type { Prisma } from "@prisma/client"

import { z } from "zod"

export const TeamUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutOrdersInput> = z.object({
  classroom_id: z.string(),
  id: z.string().optional(),
  name: z.string(),
}).strict()

export default TeamUncheckedCreateWithoutOrdersInputSchema
