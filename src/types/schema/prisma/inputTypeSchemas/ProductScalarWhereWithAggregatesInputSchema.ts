import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { FloatWithAggregatesFilterSchema } from "./FloatWithAggregatesFilterSchema"
import { StringWithAggregatesFilterSchema } from "./StringWithAggregatesFilterSchema"

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  price: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
}).strict()

export default ProductScalarWhereWithAggregatesInputSchema
