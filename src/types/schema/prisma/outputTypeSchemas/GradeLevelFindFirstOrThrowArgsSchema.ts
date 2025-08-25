import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { GradeLevelIncludeSchema } from "../inputTypeSchemas/GradeLevelIncludeSchema"
import { GradeLevelOrderByWithRelationInputSchema } from "../inputTypeSchemas/GradeLevelOrderByWithRelationInputSchema"
import { GradeLevelScalarFieldEnumSchema } from "../inputTypeSchemas/GradeLevelScalarFieldEnumSchema"
import { GradeLevelWhereInputSchema } from "../inputTypeSchemas/GradeLevelWhereInputSchema"
import { GradeLevelWhereUniqueInputSchema } from "../inputTypeSchemas/GradeLevelWhereUniqueInputSchema"
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { GradeLevelCountOutputTypeArgsSchema } from "../outputTypeSchemas/GradeLevelCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
  classroom: z.union([z.boolean(), z.lazy(() => ClassroomArgsSchema)]).optional(),
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
}).strict()

export const GradeLevelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GradeLevelFindFirstOrThrowArgs> = z.object({
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  distinct: z.union([GradeLevelScalarFieldEnumSchema, GradeLevelScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
  orderBy: z.union([GradeLevelOrderByWithRelationInputSchema.array(), GradeLevelOrderByWithRelationInputSchema]).optional(),
  select: GradeLevelSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: GradeLevelWhereInputSchema.optional(),
}).strict()

export default GradeLevelFindFirstOrThrowArgsSchema
