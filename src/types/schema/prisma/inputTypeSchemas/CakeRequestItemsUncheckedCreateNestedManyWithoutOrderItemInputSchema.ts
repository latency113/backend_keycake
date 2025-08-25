import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema } from "./CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema"
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
}).strict()

export default CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema
