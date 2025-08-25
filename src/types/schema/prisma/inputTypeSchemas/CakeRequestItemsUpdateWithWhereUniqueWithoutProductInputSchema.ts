import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutProductInputSchema"
import { CakeRequestItemsUpdateWithoutProductInputSchema } from "./CakeRequestItemsUpdateWithoutProductInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutProductInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema
