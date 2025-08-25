import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { IntFilterSchema } from "./IntFilterSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const CakeRequestItemsScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestItemsScalarWhereInputSchema), z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => CakeRequestItemsScalarWhereInputSchema), z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array().optional(),
  order_item_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  request_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestItemsScalarWhereInputSchema
