import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelIncludeSchema } from '../inputTypeSchemas/GradeLevelIncludeSchema'
import { GradeLevelWhereUniqueInputSchema } from '../inputTypeSchemas/GradeLevelWhereUniqueInputSchema'
import { GradeLevelCreateInputSchema } from '../inputTypeSchemas/GradeLevelCreateInputSchema'
import { GradeLevelUncheckedCreateInputSchema } from '../inputTypeSchemas/GradeLevelUncheckedCreateInputSchema'
import { GradeLevelUpdateInputSchema } from '../inputTypeSchemas/GradeLevelUpdateInputSchema'
import { GradeLevelUncheckedUpdateInputSchema } from '../inputTypeSchemas/GradeLevelUncheckedUpdateInputSchema'
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

export const GradeLevelUpsertArgsSchema: z.ZodType<Prisma.GradeLevelUpsertArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  where: GradeLevelWhereUniqueInputSchema,
  create: z.union([ GradeLevelCreateInputSchema,GradeLevelUncheckedCreateInputSchema ]),
  update: z.union([ GradeLevelUpdateInputSchema,GradeLevelUncheckedUpdateInputSchema ]),
}).strict() ;

export default GradeLevelUpsertArgsSchema;
