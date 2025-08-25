import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from "./CakeRequestUncheckedUpdateWithoutItemsInputSchema"
import { CakeRequestUpdateWithoutItemsInputSchema } from "./CakeRequestUpdateWithoutItemsInputSchema"
import { CakeRequestWhereInputSchema } from "./CakeRequestWhereInputSchema"

export const CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpdateToOneWithWhereWithoutItemsInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema)]),
  where: z.lazy(() => CakeRequestWhereInputSchema).optional(),
}).strict()

export default CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema
