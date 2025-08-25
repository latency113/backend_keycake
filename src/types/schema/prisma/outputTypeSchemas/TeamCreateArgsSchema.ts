import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamCreateInputSchema } from "../inputTypeSchemas/TeamCreateInputSchema"
import { TeamIncludeSchema } from "../inputTypeSchemas/TeamIncludeSchema"
import { TeamUncheckedCreateInputSchema } from "../inputTypeSchemas/TeamUncheckedCreateInputSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { TeamCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  classroom_id: z.boolean().optional(),
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsSchema)]).optional(),
}).strict()

export const TeamCreateArgsSchema: z.ZodType<Prisma.TeamCreateArgs> = z.object({
  data: z.union([TeamCreateInputSchema, TeamUncheckedCreateInputSchema]),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  select: TeamSelectSchema.optional(),
}).strict()

export default TeamCreateArgsSchema
