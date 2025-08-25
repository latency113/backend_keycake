import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateOrConnectWithoutOrderItemsInputSchema } from "./ProductCreateOrConnectWithoutOrderItemsInputSchema"
import { ProductCreateWithoutOrderItemsInputSchema } from "./ProductCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedCreateWithoutOrderItemsInputSchema } from "./ProductUncheckedCreateWithoutOrderItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput> = z.object({
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema)]).optional(),
}).strict()

export default ProductCreateNestedOneWithoutOrderItemsInputSchema
