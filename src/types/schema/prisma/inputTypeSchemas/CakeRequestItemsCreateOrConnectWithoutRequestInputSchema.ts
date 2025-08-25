import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutRequestInputSchema } from "./CakeRequestItemsCreateWithoutRequestInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutRequestInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsCreateOrConnectWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutRequestInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsCreateOrConnectWithoutRequestInputSchema
