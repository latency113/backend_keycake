import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentIncludeSchema } from '../inputTypeSchemas/DepartmentIncludeSchema'
import { DepartmentWhereUniqueInputSchema } from '../inputTypeSchemas/DepartmentWhereUniqueInputSchema'
import { DepartmentCreateInputSchema } from '../inputTypeSchemas/DepartmentCreateInputSchema'
import { DepartmentUncheckedCreateInputSchema } from '../inputTypeSchemas/DepartmentUncheckedCreateInputSchema'
import { DepartmentUpdateInputSchema } from '../inputTypeSchemas/DepartmentUpdateInputSchema'
import { DepartmentUncheckedUpdateInputSchema } from '../inputTypeSchemas/DepartmentUncheckedUpdateInputSchema'
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

export const DepartmentUpsertArgsSchema: z.ZodType<Prisma.DepartmentUpsertArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  where: DepartmentWhereUniqueInputSchema,
  create: z.union([ DepartmentCreateInputSchema,DepartmentUncheckedCreateInputSchema ]),
  update: z.union([ DepartmentUpdateInputSchema,DepartmentUncheckedUpdateInputSchema ]),
}).strict() ;

export default DepartmentUpsertArgsSchema;
