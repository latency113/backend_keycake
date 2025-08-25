import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutProductInputSchema } from "./CakeRequestItemsCreateWithoutProductInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutProductInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutProductInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsCreateOrConnectWithoutProductInputSchema
