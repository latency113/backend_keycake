import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict()

export default TeamCountOutputTypeSelectSchema
