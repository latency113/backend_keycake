import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateWithoutOrderItemsInputSchema } from "./ProductCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedCreateWithoutOrderItemsInputSchema } from "./ProductUncheckedCreateWithoutOrderItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput> = z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema)]),
  where: z.lazy(() => ProductWhereUniqueInputSchema),
}).strict()

export default ProductCreateOrConnectWithoutOrderItemsInputSchema
