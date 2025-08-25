import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateOrConnectWithoutItemsInputSchema } from "./ProductCreateOrConnectWithoutItemsInputSchema"
import { ProductCreateWithoutItemsInputSchema } from "./ProductCreateWithoutItemsInputSchema"
import { ProductUncheckedCreateWithoutItemsInputSchema } from "./ProductUncheckedCreateWithoutItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutItemsInput> = z.object({
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  create: z.union([z.lazy(() => ProductCreateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema)]).optional(),
}).strict()

export default ProductCreateNestedOneWithoutItemsInputSchema
