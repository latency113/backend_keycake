import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestScalarRelationFilterSchema } from "./CakeRequestScalarRelationFilterSchema"
import { CakeRequestWhereInputSchema } from "./CakeRequestWhereInputSchema"
import { IntFilterSchema } from "./IntFilterSchema"
import { OrderItemScalarRelationFilterSchema } from "./OrderItemScalarRelationFilterSchema"
import { OrderItemWhereInputSchema } from "./OrderItemWhereInputSchema"
import { ProductScalarRelationFilterSchema } from "./ProductScalarRelationFilterSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const CakeRequestItemsWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereInput> = z.object({
  AND: z.union([z.lazy(() => CakeRequestItemsWhereInputSchema), z.lazy(() => CakeRequestItemsWhereInputSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  NOT: z.union([z.lazy(() => CakeRequestItemsWhereInputSchema), z.lazy(() => CakeRequestItemsWhereInputSchema).array()]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  order_item_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  orderItem: z.union([z.lazy(() => OrderItemScalarRelationFilterSchema), z.lazy(() => OrderItemWhereInputSchema)]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterSchema), z.lazy(() => ProductWhereInputSchema)]).optional(),
  product_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
  request: z.union([z.lazy(() => CakeRequestScalarRelationFilterSchema), z.lazy(() => CakeRequestWhereInputSchema)]).optional(),
  request_id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict()

export default CakeRequestItemsWhereInputSchema
