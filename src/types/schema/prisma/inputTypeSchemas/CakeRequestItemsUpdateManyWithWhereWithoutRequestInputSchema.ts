import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema"
import { CakeRequestItemsUpdateManyMutationInputSchema } from "./CakeRequestItemsUpdateManyMutationInputSchema"

export const CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutRequestInput> = z.object({
  data: z.union([z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema), z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema)]),
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
}).strict()

export default CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema
