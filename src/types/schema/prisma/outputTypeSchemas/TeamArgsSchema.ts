import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamIncludeSchema } from "../inputTypeSchemas/TeamIncludeSchema"
import { TeamSelectSchema } from "../inputTypeSchemas/TeamSelectSchema"

export const TeamArgsSchema: z.ZodType<Prisma.TeamDefaultArgs> = z.object({
  include: z.lazy(() => TeamIncludeSchema).optional(),
  select: z.lazy(() => TeamSelectSchema).optional(),
}).strict()

export default TeamArgsSchema
