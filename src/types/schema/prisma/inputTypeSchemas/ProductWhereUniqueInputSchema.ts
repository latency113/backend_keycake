import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsListRelationFilterSchema } from "./CakeRequestItemsListRelationFilterSchema"
import { FloatFilterSchema } from "./FloatFilterSchema"
import { OrderItemListRelationFilterSchema } from "./OrderItemListRelationFilterSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"
import { StringFilterSchema } from "./StringFilterSchema"

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string(),
})
  .and(z.object({
    AND: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    id: z.string().optional(),
    items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    NOT: z.union([z.lazy(() => ProductWhereInputSchema), z.lazy(() => ProductWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
    orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
    price: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
  }).strict())

export default ProductWhereUniqueInputSchema
