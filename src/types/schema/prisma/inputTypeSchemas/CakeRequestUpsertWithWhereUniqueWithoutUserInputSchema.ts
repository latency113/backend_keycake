import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutUserInputSchema } from "./CakeRequestCreateWithoutUserInputSchema"
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from "./CakeRequestUncheckedCreateWithoutUserInputSchema"
import { CakeRequestUncheckedUpdateWithoutUserInputSchema } from "./CakeRequestUncheckedUpdateWithoutUserInputSchema"
import { CakeRequestUpdateWithoutUserInputSchema } from "./CakeRequestUpdateWithoutUserInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestUpdateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema
