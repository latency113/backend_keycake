import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutItemsInputSchema } from "./CakeRequestCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from "./CakeRequestUncheckedCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from "./CakeRequestUncheckedUpdateWithoutItemsInputSchema"
import { CakeRequestUpdateWithoutItemsInputSchema } from "./CakeRequestUpdateWithoutItemsInputSchema"
import { CakeRequestWhereInputSchema } from "./CakeRequestWhereInputSchema"

export const CakeRequestUpsertWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithoutItemsInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema)]),
  update: z.union([z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema)]),
  where: z.lazy(() => CakeRequestWhereInputSchema).optional(),
}).strict()

export default CakeRequestUpsertWithoutItemsInputSchema
