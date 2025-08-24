import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassroomIncludeSchema } from '../inputTypeSchemas/ClassroomIncludeSchema'
import { ClassroomWhereUniqueInputSchema } from '../inputTypeSchemas/ClassroomWhereUniqueInputSchema'
import { ClassroomCreateInputSchema } from '../inputTypeSchemas/ClassroomCreateInputSchema'
import { ClassroomUncheckedCreateInputSchema } from '../inputTypeSchemas/ClassroomUncheckedCreateInputSchema'
import { ClassroomUpdateInputSchema } from '../inputTypeSchemas/ClassroomUpdateInputSchema'
import { ClassroomUncheckedUpdateInputSchema } from '../inputTypeSchemas/ClassroomUncheckedUpdateInputSchema'
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { GradeLevelArgsSchema } from "../outputTypeSchemas/GradeLevelArgsSchema"
import { TeamArgsSchema } from "../outputTypeSchemas/TeamArgsSchema"
import { OrderArgsSchema } from "../outputTypeSchemas/OrderArgsSchema"
import { ClassroomCountOutputTypeArgsSchema } from "../outputTypeSchemas/ClassroomCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClassroomSelectSchema: z.ZodType<Prisma.ClassroomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  department_id: z.boolean().optional(),
  grade_level_id: z.boolean().optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  grade_level: z.union([z.boolean(),z.lazy(() => GradeLevelArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClassroomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClassroomUpsertArgsSchema: z.ZodType<Prisma.ClassroomUpsertArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: z.lazy(() => ClassroomIncludeSchema).optional(),
  where: ClassroomWhereUniqueInputSchema,
  create: z.union([ ClassroomCreateInputSchema,ClassroomUncheckedCreateInputSchema ]),
  update: z.union([ ClassroomUpdateInputSchema,ClassroomUncheckedUpdateInputSchema ]),
}).strict() ;

export default ClassroomUpsertArgsSchema;
