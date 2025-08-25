import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { ProductCreateOrConnectWithoutOrderItemsInputSchema } from "./ProductCreateOrConnectWithoutOrderItemsInputSchema"
import { ProductCreateWithoutOrderItemsInputSchema } from "./ProductCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedCreateWithoutOrderItemsInputSchema } from "./ProductUncheckedCreateWithoutOrderItemsInputSchema"
import { ProductUncheckedUpdateWithoutOrderItemsInputSchema } from "./ProductUncheckedUpdateWithoutOrderItemsInputSchema"
import { ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema } from "./ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema"
import { ProductUpdateWithoutOrderItemsInputSchema } from "./ProductUpdateWithoutOrderItemsInputSchema"
import { ProductUpsertWithoutOrderItemsInputSchema } from "./ProductUpsertWithoutOrderItemsInputSchema"
import { ProductWhereUniqueInputSchema } from "./ProductWhereUniqueInputSchema"

export const ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  create: z.union([z.lazy(() => ProductCreateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema)]).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema), z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema), z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema)]).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrderItemsInputSchema).optional(),
}).strict()

export default ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema
