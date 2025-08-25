import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedUpdateWithoutUserInputSchema } from "./CakeRequestUncheckedUpdateWithoutUserInputSchema"
import { CakeRequestUpdateWithoutUserInputSchema } from "./CakeRequestUpdateWithoutUserInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutUserInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestUpdateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema
