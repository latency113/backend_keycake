import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamIncludeSchema } from '../inputTypeSchemas/TeamIncludeSchema'
import { TeamWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWhereUniqueInputSchema'
import { TeamCreateInputSchema } from '../inputTypeSchemas/TeamCreateInputSchema'
import { TeamUncheckedCreateInputSchema } from '../inputTypeSchemas/TeamUncheckedCreateInputSchema'
import { TeamUpdateInputSchema } from '../inputTypeSchemas/TeamUpdateInputSchema'
import { TeamUncheckedUpdateInputSchema } from '../inputTypeSchemas/TeamUncheckedUpdateInputSchema'
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { TeamCountOutputTypeArgsSchema } from "../outputTypeSchemas/TeamCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  classroom_id: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamUpsertArgsSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  where: TeamWhereUniqueInputSchema,
  create: z.union([ TeamCreateInputSchema,TeamUncheckedCreateInputSchema ]),
  update: z.union([ TeamUpdateInputSchema,TeamUncheckedUpdateInputSchema ]),
}).strict() ;

export default TeamUpsertArgsSchema;
