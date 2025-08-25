import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestListRelationFilterSchema } from "./CakeRequestListRelationFilterSchema"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { EnumRoleFilterSchema } from "./EnumRoleFilterSchema"
import { RoleSchema } from "./RoleSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { StringNullableFilterSchema } from "./StringNullableFilterSchema"

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  firstname: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  lastname: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  password: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  username: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict()

export default UserWhereInputSchema
