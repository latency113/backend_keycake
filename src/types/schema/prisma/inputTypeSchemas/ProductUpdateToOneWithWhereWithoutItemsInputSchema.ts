import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductUncheckedUpdateWithoutItemsInputSchema } from "./ProductUncheckedUpdateWithoutItemsInputSchema"
import { ProductUpdateWithoutItemsInputSchema } from "./ProductUpdateWithoutItemsInputSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"

export const ProductUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutItemsInput> = z.object({
  data: z.union([z.lazy(() => ProductUpdateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema)]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict()

export default ProductUpdateToOneWithWhereWithoutItemsInputSchema
