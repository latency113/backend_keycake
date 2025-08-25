import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductUncheckedUpdateWithoutOrderItemsInputSchema } from "./ProductUncheckedUpdateWithoutOrderItemsInputSchema"
import { ProductUpdateWithoutOrderItemsInputSchema } from "./ProductUpdateWithoutOrderItemsInputSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"

export const ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput> = z.object({
  data: z.union([z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict()

export default ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema
