import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyProductInputEnvelopeSchema } from "./CakeRequestItemsCreateManyProductInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutProductInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutProductInputSchema"
import { CakeRequestItemsCreateWithoutProductInputSchema } from "./CakeRequestItemsCreateWithoutProductInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutProductInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutProductInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
}).strict()

export default CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema
