import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentIncludeSchema } from '../inputTypeSchemas/DepartmentIncludeSchema'
import { DepartmentCreateInputSchema } from '../inputTypeSchemas/DepartmentCreateInputSchema'
import { DepartmentUncheckedCreateInputSchema } from '../inputTypeSchemas/DepartmentUncheckedCreateInputSchema'
import { ClassroomArgsSchema } from "../outputTypeSchemas/ClassroomArgsSchema"
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { DepartmentCountOutputTypeArgsSchema } from "../outputTypeSchemas/DepartmentCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DepartmentSelectSchema: z.ZodType<Prisma.DepartmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  group_number: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DepartmentCreateArgsSchema: z.ZodType<Prisma.DepartmentCreateArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  data: z.union([ DepartmentCreateInputSchema,DepartmentUncheckedCreateInputSchema ]),
}).strict() ;

export default DepartmentCreateArgsSchema;
