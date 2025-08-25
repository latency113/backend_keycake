import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateWithoutItemsInputSchema } from "./ProductCreateWithoutItemsInputSchema"
import { ProductUncheckedCreateWithoutItemsInputSchema } from "./ProductUncheckedCreateWithoutItemsInputSchema"
import { ProductUncheckedUpdateWithoutItemsInputSchema } from "./ProductUncheckedUpdateWithoutItemsInputSchema"
import { ProductUpdateWithoutItemsInputSchema } from "./ProductUpdateWithoutItemsInputSchema"
import { ProductWhereInputSchema } from "./ProductWhereInputSchema"

export const ProductUpsertWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutItemsInput> = z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema)]),
  update: z.union([z.lazy(() => ProductUpdateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema)]),
  where: z.lazy(() => ProductWhereInputSchema).optional(),
}).strict()

export default ProductUpsertWithoutItemsInputSchema
