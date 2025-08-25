import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeFilterSchema } from "./DateTimeFilterSchema"
import { EnumRequestStatusFilterSchema } from "./EnumRequestStatusFilterSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { StringFilterSchema } from "./StringFilterSchema"
import { StringNullableFilterSchema } from "./StringNullableFilterSchema"

export const CakeRequestScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestScalarWhereInputSchema), z.lazy(() => CakeRequestScalarWhereInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  department_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => CakeRequestScalarWhereInputSchema), z.lazy(() => CakeRequestScalarWhereInputSchema).array()]).optional(),
  note: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
  OR: z.lazy(() => CakeRequestScalarWhereInputSchema).array().optional(),
  requestDate: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumRequestStatusFilterSchema), z.lazy(() => RequestStatusSchema)]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
  user_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestScalarWhereInputSchema
