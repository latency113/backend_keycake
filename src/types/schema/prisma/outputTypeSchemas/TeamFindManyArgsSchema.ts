import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TeamIncludeSchema } from '../inputTypeSchemas/TeamIncludeSchema'
import { TeamWhereInputSchema } from '../inputTypeSchemas/TeamWhereInputSchema'
import { TeamOrderByWithRelationInputSchema } from '../inputTypeSchemas/TeamOrderByWithRelationInputSchema'
import { TeamWhereUniqueInputSchema } from '../inputTypeSchemas/TeamWhereUniqueInputSchema'
import { TeamScalarFieldEnumSchema } from '../inputTypeSchemas/TeamScalarFieldEnumSchema'
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

export const TeamFindManyArgsSchema: z.ZodType<Prisma.TeamFindManyArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TeamFindManyArgsSchema;
