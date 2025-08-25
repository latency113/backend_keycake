import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamCountOutputTypeSelectSchema } from "./TeamCountOutputTypeSelectSchema"

export const TeamCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamCountOutputTypeSelectSchema).nullish(),
}).strict()

export default TeamCountOutputTypeSelectSchema
