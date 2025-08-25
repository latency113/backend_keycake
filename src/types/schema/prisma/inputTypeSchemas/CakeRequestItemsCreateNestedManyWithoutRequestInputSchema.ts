import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyRequestInputEnvelopeSchema } from "./CakeRequestItemsCreateManyRequestInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutRequestInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutRequestInputSchema"
import { CakeRequestItemsCreateWithoutRequestInputSchema } from "./CakeRequestItemsCreateWithoutRequestInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutRequestInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsCreateNestedManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateNestedManyWithoutRequestInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
}).strict()

export default CakeRequestItemsCreateNestedManyWithoutRequestInputSchema
