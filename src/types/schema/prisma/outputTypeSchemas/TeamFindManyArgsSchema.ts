import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { TeamIncludeSchema } from "../inputTypeSchemas/TeamIncludeSchema"
import { TeamOrderByWithRelationInputSchema } from "../inputTypeSchemas/TeamOrderByWithRelationInputSchema"
import { TeamScalarFieldEnumSchema } from "../inputTypeSchemas/TeamScalarFieldEnumSchema"
import { TeamWhereInputSchema } from "../inputTypeSchemas/TeamWhereInputSchema"
import { TeamWhereUniqueInputSchema } from "../inputTypeSchemas/TeamWhereUniqueInputSchema"
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

export const TeamFindManyArgsSchema: z.ZodType<Prisma.TeamFindManyArgs> = z.object({
  cursor: TeamWhereUniqueInputSchema.optional(),
  distinct: z.union([TeamScalarFieldEnumSchema, TeamScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  orderBy: z.union([TeamOrderByWithRelationInputSchema.array(), TeamOrderByWithRelationInputSchema]).optional(),
  select: TeamSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: TeamWhereInputSchema.optional(),
}).strict()

export default TeamFindManyArgsSchema
