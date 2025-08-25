import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestScalarWhereInputSchema } from "./CakeRequestScalarWhereInputSchema"
import { CakeRequestUncheckedUpdateManyWithoutUserInputSchema } from "./CakeRequestUncheckedUpdateManyWithoutUserInputSchema"
import { CakeRequestUpdateManyMutationInputSchema } from "./CakeRequestUpdateManyMutationInputSchema"

export const CakeRequestUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutUserInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestUpdateManyMutationInputSchema), z.lazy(() => CakeRequestUncheckedUpdateManyWithoutUserInputSchema)]),
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
}).strict()

export default CakeRequestUpdateManyWithWhereWithoutUserInputSchema
