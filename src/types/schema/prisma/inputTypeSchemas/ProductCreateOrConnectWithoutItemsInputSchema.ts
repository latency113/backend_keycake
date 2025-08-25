import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateWithoutItemsInputSchema } from "./ProductCreateWithoutItemsInputSchema"
import { ProductUncheckedCreateWithoutItemsInputSchema } from "./ProductUncheckedCreateWithoutItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutItemsInput> = z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema)]),
  where: z.lazy(() => ProductWhereUniqueInputSchema),
}).strict()

export default ProductCreateOrConnectWithoutItemsInputSchema
