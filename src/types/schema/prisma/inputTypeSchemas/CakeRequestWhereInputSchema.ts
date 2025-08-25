import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsListRelationFilterSchema } from "./CakeRequestItemsListRelationFilterSchema"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { DepartmentScalarRelationFilterSchema } from "./DepartmentScalarRelationFilterSchema"
import { DepartmentWhereInputSchema } from "./DepartmentWhereInputSchema"
import { EnumRequestStatusFilterSchema } from "./EnumRequestStatusFilterSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { StringNullableFilterSchema } from "./StringNullableFilterSchema"
import { UserScalarRelationFilterSchema } from "./UserScalarRelationFilterSchema"
import { UserWhereInputSchema } from "./UserWhereInputSchema"

export const CakeRequestWhereInputSchema: z.ZodType<Prisma.CakeRequestWhereInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestWhereInputSchema), z.lazy(() => CakeRequestWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  department: z.union([z.lazy(() => DepartmentScalarRelationFilterSchema), z.lazy(() => DepartmentWhereInputSchema)]).optional(),
  department_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional(),
  NOT: z.union([z.lazy(() => CakeRequestWhereInputSchema), z.lazy(() => CakeRequestWhereInputSchema).array()]).optional(),
  note: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  requestDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumRequestStatusFilterSchema), z.lazy(() => RequestStatusSchema)]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
  user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestWhereInputSchema
