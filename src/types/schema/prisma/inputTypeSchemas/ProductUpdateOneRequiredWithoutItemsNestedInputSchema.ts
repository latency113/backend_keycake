import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateOrConnectWithoutItemsInputSchema } from "./ProductCreateOrConnectWithoutItemsInputSchema"
import { ProductCreateWithoutItemsInputSchema } from "./ProductCreateWithoutItemsInputSchema"
import { ProductUncheckedCreateWithoutItemsInputSchema } from "./ProductUncheckedCreateWithoutItemsInputSchema"
import { ProductUncheckedUpdateWithoutItemsInputSchema } from "./ProductUncheckedUpdateWithoutItemsInputSchema"
import { ProductUpdateToOneWithWhereWithoutItemsInputSchema } from "./ProductUpdateToOneWithWhereWithoutItemsInputSchema"
import { ProductUpdateWithoutItemsInputSchema } from "./ProductUpdateWithoutItemsInputSchema"
import { ProductUpsertWithoutItemsInputSchema } from "./ProductUpsertWithoutItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  create: z.union([z.lazy(() => ProductCreateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema)]).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutItemsInputSchema), z.lazy(() => ProductUpdateWithoutItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema)]).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutItemsInputSchema).optional(),
}).strict()

export default ProductUpdateOneRequiredWithoutItemsNestedInputSchema
