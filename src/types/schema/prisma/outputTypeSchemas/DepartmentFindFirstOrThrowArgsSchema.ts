import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DepartmentIncludeSchema } from '../inputTypeSchemas/DepartmentIncludeSchema'
import { DepartmentWhereInputSchema } from '../inputTypeSchemas/DepartmentWhereInputSchema'
import { DepartmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/DepartmentOrderByWithRelationInputSchema'
import { DepartmentWhereUniqueInputSchema } from '../inputTypeSchemas/DepartmentWhereUniqueInputSchema'
import { DepartmentScalarFieldEnumSchema } from '../inputTypeSchemas/DepartmentScalarFieldEnumSchema'
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

export const DepartmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DepartmentFindFirstOrThrowArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema,DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DepartmentFindFirstOrThrowArgsSchema;
