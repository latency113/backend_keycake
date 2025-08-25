import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema"
import { CakeRequestItemsUpdateWithoutRequestInputSchema } from "./CakeRequestItemsUpdateWithoutRequestInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema)]),
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
}).strict()

export default CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema
