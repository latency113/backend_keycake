import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelIncludeSchema } from '../inputTypeSchemas/GradeLevelIncludeSchema'
import { GradeLevelWhereInputSchema } from '../inputTypeSchemas/GradeLevelWhereInputSchema'
import { GradeLevelOrderByWithRelationInputSchema } from '../inputTypeSchemas/GradeLevelOrderByWithRelationInputSchema'
import { GradeLevelWhereUniqueInputSchema } from '../inputTypeSchemas/GradeLevelWhereUniqueInputSchema'
import { GradeLevelScalarFieldEnumSchema } from '../inputTypeSchemas/GradeLevelScalarFieldEnumSchema'
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { GradeLevelCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeLevelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GradeLevelFindFirstArgsSchema: z.ZodType<Prisma.GradeLevelFindFirstArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GradeLevelScalarFieldEnumSchema,GradeLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default GradeLevelFindFirstArgsSchema;
