import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutOrderItemInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema
