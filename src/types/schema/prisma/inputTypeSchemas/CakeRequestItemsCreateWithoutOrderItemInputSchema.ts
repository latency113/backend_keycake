import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from "./CakeRequestCreateNestedOneWithoutItemsInputSchema"
import { ProductCreateNestedOneWithoutItemsInputSchema } from "./ProductCreateNestedOneWithoutItemsInputSchema"

export const CakeRequestItemsCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutOrderItemInput> = z.object({
  id: z.string().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  quantity: z.number().int(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema),
}).strict()

export default CakeRequestItemsCreateWithoutOrderItemInputSchema
