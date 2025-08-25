import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { CakeRequestIncludeSchema } from "../inputTypeSchemas/CakeRequestIncludeSchema"
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

export const CakeRequestDeleteArgsSchema: z.ZodType<Prisma.CakeRequestDeleteArgs> = z.object({
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
  select: CakeRequestSelectSchema.optional(),
  where: CakeRequestWhereUniqueInputSchema,
}).strict()

export default CakeRequestDeleteArgsSchema
