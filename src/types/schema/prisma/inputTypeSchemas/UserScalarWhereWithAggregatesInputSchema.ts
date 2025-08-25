import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema"
import { EnumRoleWithAggregatesFilterSchema } from "./EnumRoleWithAggregatesFilterSchema"
import { RoleSchema } from "./RoleSchema"
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  email: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  firstname: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  lastname: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => UserScalarWhereWithAggregatesInputSchema), z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  password: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumRoleWithAggregatesFilterSchema), z.lazy(() => RoleSchema)]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  username: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict()

export default UserScalarWhereWithAggregatesInputSchema
