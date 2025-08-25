import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema"
import { CakeRequestItemsUpdateManyMutationInputSchema } from "./CakeRequestItemsUpdateManyMutationInputSchema"

export const CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema)]),
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
}).strict()

export default CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema
