import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema"
import { CakeRequestItemsUpdateWithoutOrderItemInputSchema } from "./CakeRequestItemsUpdateWithoutOrderItemInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema
