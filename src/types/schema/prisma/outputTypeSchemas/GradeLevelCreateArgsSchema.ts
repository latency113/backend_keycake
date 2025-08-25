import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { GradeLevelIncludeSchema } from '../inputTypeSchemas/GradeLevelIncludeSchema'
import { GradeLevelCreateInputSchema } from '../inputTypeSchemas/GradeLevelCreateInputSchema'
import { GradeLevelUncheckedCreateInputSchema } from '../inputTypeSchemas/GradeLevelUncheckedCreateInputSchema'
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

export const GradeLevelCreateArgsSchema: z.ZodType<Prisma.GradeLevelCreateArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  data: z.union([ GradeLevelCreateInputSchema,GradeLevelUncheckedCreateInputSchema ]),
}).strict() ;

export default GradeLevelCreateArgsSchema;
