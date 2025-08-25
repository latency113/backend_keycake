import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DateTimeWithAggregatesFilterSchema } from "./DateTimeWithAggregatesFilterSchema"
import { EnumRequestStatusWithAggregatesFilterSchema } from "./EnumRequestStatusWithAggregatesFilterSchema"
import { RequestStatusSchema } from "./RequestStatusSchema"
import { StringNullableWithAggregatesFilterSchema } from "./StringNullableWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const CakeRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  department_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema), z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array()]).optional(),
  note: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
  OR: z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  requestDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumRequestStatusWithAggregatesFilterSchema), z.lazy(() => RequestStatusSchema)]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
  user_id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestScalarWhereWithAggregatesInputSchema
