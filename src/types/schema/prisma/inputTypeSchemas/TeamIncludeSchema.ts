import type { Prisma } from "@prisma/client"
import { z } from "zod"

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
}).strict()

export default TeamIncludeSchema
