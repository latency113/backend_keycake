import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutRequestInputSchema } from "./CakeRequestItemsCreateWithoutRequestInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutRequestInputSchema"
import { CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema"
import { CakeRequestItemsUpdateWithoutRequestInputSchema } from "./CakeRequestItemsUpdateWithoutRequestInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema
