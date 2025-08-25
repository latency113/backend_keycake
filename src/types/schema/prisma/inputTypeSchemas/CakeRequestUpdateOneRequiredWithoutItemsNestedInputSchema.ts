import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateOrConnectWithoutItemsInputSchema } from "./CakeRequestCreateOrConnectWithoutItemsInputSchema"
import { CakeRequestCreateWithoutItemsInputSchema } from "./CakeRequestCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedCreateWithoutItemsInputSchema } from "./CakeRequestUncheckedCreateWithoutItemsInputSchema"
import { CakeRequestUncheckedUpdateWithoutItemsInputSchema } from "./CakeRequestUncheckedUpdateWithoutItemsInputSchema"
import { CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema } from "./CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema"
import { CakeRequestUpdateWithoutItemsInputSchema } from "./CakeRequestUpdateWithoutItemsInputSchema"
import { CakeRequestUpsertWithoutItemsInputSchema } from "./CakeRequestUpsertWithoutItemsInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema)]).optional(),
  update: z.union([z.lazy(() => CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema), z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema), z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema)]).optional(),
  upsert: z.lazy(() => CakeRequestUpsertWithoutItemsInputSchema).optional(),
}).strict()

export default CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema
