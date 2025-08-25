import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestIncludeSchema } from "../inputTypeSchemas/CakeRequestIncludeSchema"
import { CakeRequestOrderByWithRelationInputSchema } from "../inputTypeSchemas/CakeRequestOrderByWithRelationInputSchema"
import { CakeRequestScalarFieldEnumSchema } from "../inputTypeSchemas/CakeRequestScalarFieldEnumSchema"
import { CakeRequestWhereInputSchema } from "../inputTypeSchemas/CakeRequestWhereInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "../inputTypeSchemas/CakeRequestWhereUniqueInputSchema"
import { CakeRequestCountOutputTypeArgsSchema } from "../outputTypeSchemas/CakeRequestCountOutputTypeArgsSchema"
import { CakeRequestItemsArgsSchema } from "../outputTypeSchemas/CakeRequestItemsArgsSchema"
import { DepartmentArgsSchema } from "../outputTypeSchemas/DepartmentArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
// ------------------------------------------------------

export const CakeRequestSelectSchema: z.ZodType<Prisma.CakeRequestSelect> = z.object({
  _count: z.union([z.boolean(), z.lazy(() => CakeRequestCountOutputTypeArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  department: z.union([z.boolean(), z.lazy(() => DepartmentArgsSchema)]).optional(),
  department_id: z.boolean().optional(),
  id: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => CakeRequestItemsArgsSchema)]).optional(),
  note: z.boolean().optional(),
  requestDate: z.boolean().optional(),
  status: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  user_id: z.boolean().optional(),
}).strict()

export const CakeRequestFindFirstArgsSchema: z.ZodType<Prisma.CakeRequestFindFirstArgs> = z.object({
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  distinct: z.union([CakeRequestScalarFieldEnumSchema, CakeRequestScalarFieldEnumSchema.array()]).optional(),
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
  orderBy: z.union([CakeRequestOrderByWithRelationInputSchema.array(), CakeRequestOrderByWithRelationInputSchema]).optional(),
  select: CakeRequestSelectSchema.optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  where: CakeRequestWhereInputSchema.optional(),
}).strict()

export default CakeRequestFindFirstArgsSchema
