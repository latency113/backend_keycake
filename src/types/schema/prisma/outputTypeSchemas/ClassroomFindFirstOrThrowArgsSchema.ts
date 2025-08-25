import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { ClassroomIncludeSchema } from "../inputTypeSchemas/ClassroomIncludeSchema"
import { ClassroomOrderByWithRelationInputSchema } from "../inputTypeSchemas/ClassroomOrderByWithRelationInputSchema"
import { ClassroomScalarFieldEnumSchema } from "../inputTypeSchemas/ClassroomScalarFieldEnumSchema"
import { ClassroomWhereInputSchema } from "../inputTypeSchemas/ClassroomWhereInputSchema"
import { ClassroomWhereUniqueInputSchema } from "../inputTypeSchemas/ClassroomWhereUniqueInputSchema"
import { ClassroomCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClassroomCountOutputTypeArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { GradeLevelArgsSchema } from "../outputTypeSchemas/GradeLevelArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const ClassroomSelectSchema: z.ZodType<Prisma.ClassroomSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => ClassroomCountOutputTypeArgsSchema)]).optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsSchema)]).optional(),
  department_id: z.boolean().optional(),
  grade_level: z.union([z.boolean(), z.lazy(() => GradeLevelArgsSchema)]).optional(),
  grade_level_id: z.boolean().optional(),
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderArgsSchema)]).optional(),
  teams: z.union([z.boolean(), z.lazy(() => TeamArgsSchema)]).optional(),
}).strict()

export const ClassroomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClassroomFindFirstOrThrowArgs> = z.object({
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  distinct: z.union([ClassroomScalarFieldEnumSchema, ClassroomScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => ClassroomIncludeSchema).optional(),
  orderBy: z.union([ClassroomOrderByWithRelationInputSchema.array(), ClassroomOrderByWithRelationInputSchema]).optional(),
  select: ClassroomSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: ClassroomWhereInputSchema.optional(),
}).strict()

export default ClassroomFindFirstOrThrowArgsSchema
