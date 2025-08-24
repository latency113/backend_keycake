import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestIncludeSchema } from '../inputTypeSchemas/CakeRequestIncludeSchema'
import { CakeRequestWhereInputSchema } from '../inputTypeSchemas/CakeRequestWhereInputSchema'
import { CakeRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/CakeRequestOrderByWithRelationInputSchema'
import { CakeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CakeRequestWhereUniqueInputSchema'
import { CakeRequestScalarFieldEnumSchema } from '../inputTypeSchemas/CakeRequestScalarFieldEnumSchema'
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { CakeRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/CakeRequestCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CakeRequestSelectSchema: z.ZodType<Prisma.CakeRequestSelect> = z.object({
  id: z.boolean().optional(),
  requestDate: z.boolean().optional(),
  status: z.boolean().optional(),
  note: z.boolean().optional(),
  user_id: z.boolean().optional(),
  department_id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CakeRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CakeRequestFindManyArgsSchema: z.ZodType<Prisma.CakeRequestFindManyArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestScalarFieldEnumSchema,CakeRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CakeRequestFindManyArgsSchema;
