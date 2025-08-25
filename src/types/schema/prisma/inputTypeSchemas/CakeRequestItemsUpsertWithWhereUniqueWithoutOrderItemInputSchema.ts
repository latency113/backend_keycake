import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema"
import { CakeRequestItemsUpdateWithoutOrderItemInputSchema } from "./CakeRequestItemsUpdateWithoutOrderItemInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema
