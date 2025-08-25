import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateWithoutItemsInputSchema } from "./CakeRequestCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from "./CakeRequestUncheckedCreateWithoutItemsInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutItemsInput> = z.object({
  create: z.union([z.lazy(() => CakeRequestCreateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema)]),
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
}).strict()

export default CakeRequestCreateOrConnectWithoutItemsInputSchema
