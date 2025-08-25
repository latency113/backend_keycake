import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateOrConnectWithoutItemsInputSchema } from "./CakeRequestCreateOrConnectWithoutItemsInputSchema"
import { CakeRequestCreateWithoutItemsInputSchema } from "./CakeRequestCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from "./CakeRequestUncheckedCreateWithoutItemsInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedOneWithoutItemsInput> = z.object({
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema)]).optional(),
}).strict()

export default CakeRequestCreateNestedOneWithoutItemsInputSchema
