import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutUserInputSchema } from "./CakeRequestCreateWithoutUserInputSchema"
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from "./CakeRequestUncheckedCreateWithoutUserInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutUserInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestCreateOrConnectWithoutUserInputSchema
