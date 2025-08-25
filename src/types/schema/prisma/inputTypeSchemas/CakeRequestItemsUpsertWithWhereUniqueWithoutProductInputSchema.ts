import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateWithoutProductInputSchema } from "./CakeRequestItemsCreateWithoutProductInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutProductInputSchema"
import { CakeRequestItemsUncheckedUpdateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutProductInputSchema"
import { CakeRequestItemsUpdateWithoutProductInputSchema } from "./CakeRequestItemsUpdateWithoutProductInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutProductInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema
