import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCountOrderByAggregateInputSchema } from "./DepartmentCountOrderByAggregateInputSchema"
import { DepartmentMaxOrderByAggregateInputSchema } from "./DepartmentMaxOrderByAggregateInputSchema"
import { DepartmentMinOrderByAggregateInputSchema } from "./DepartmentMinOrderByAggregateInputSchema"
import { SortOrderSchema } from "./SortOrderSchema"

export const DepartmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput> = z.object({
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
}).strict()

export default DepartmentOrderByWithAggregationInputSchema
