import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelIncludeSchema } from '../inputTypeSchemas/GradeLevelIncludeSchema'
import { GradeLevelWhereUniqueInputSchema } from '../inputTypeSchemas/GradeLevelWhereUniqueInputSchema'
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

export const GradeLevelDeleteArgsSchema: z.ZodType<Prisma.GradeLevelDeleteArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  where: GradeLevelWhereUniqueInputSchema,
}).strict() ;

export default GradeLevelDeleteArgsSchema;
