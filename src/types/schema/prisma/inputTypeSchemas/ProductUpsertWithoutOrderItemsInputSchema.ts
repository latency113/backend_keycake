import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateWithoutOrderItemsInputSchema } from "./ProductCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedCreateWithoutOrderItemsInputSchema } from "./ProductUncheckedCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedUpdateWithoutOrderItemsInputSchema } from "./ProductUncheckedUpdateWithoutOrderItemsInputSchema"
import { ProductUpdateWithoutOrderItemsInputSchema } from "./ProductUpdateWithoutOrderItemsInputSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"

export const ProductUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput> = z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema)]),
  update: z.union([z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict()

export default ProductUpsertWithoutOrderItemsInputSchema
