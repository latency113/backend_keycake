import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema } from "./CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema"
import { CakeRequestItemsUpdateManyMutationInputSchema } from "./CakeRequestItemsUpdateManyMutationInputSchema"

export const CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutProductInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema)]),
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
}).strict()

export default CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema
