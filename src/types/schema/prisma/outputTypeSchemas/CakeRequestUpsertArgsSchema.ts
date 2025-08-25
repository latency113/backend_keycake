import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestIncludeSchema } from '../inputTypeSchemas/CakeRequestIncludeSchema'
import { CakeRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CakeRequestWhereUniqueInputSchema'
import { CakeRequestCreateInputSchema } from '../inputTypeSchemas/CakeRequestCreateInputSchema'
import { CakeRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/CakeRequestUncheckedCreateInputSchema'
import { CakeRequestUpdateInputSchema } from '../inputTypeSchemas/CakeRequestUpdateInputSchema'
import { CakeRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/CakeRequestUncheckedUpdateInputSchema'
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

export const CakeRequestUpsertArgsSchema: z.ZodType<Prisma.CakeRequestUpsertArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
  where: CakeRequestWhereUniqueInputSchema,
  create: z.union([ CakeRequestCreateInputSchema,CakeRequestUncheckedCreateInputSchema ]),
  update: z.union([ CakeRequestUpdateInputSchema,CakeRequestUncheckedUpdateInputSchema ]),
}).strict() ;

export default CakeRequestUpsertArgsSchema;
