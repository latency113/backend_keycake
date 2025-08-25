import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateManyUserInputEnvelopeSchema } from "./CakeRequestCreateManyUserInputEnvelopeSchema"
import { CakeRequestCreateOrConnectWithoutUserInputSchema } from "./CakeRequestCreateOrConnectWithoutUserInputSchema"
import { CakeRequestCreateWithoutUserInputSchema } from "./CakeRequestCreateWithoutUserInputSchema"
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from "./CakeRequestUncheckedCreateWithoutUserInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateNestedManyWithoutUserInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema), z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutUserInputSchema), z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
}).strict()

export default CakeRequestUncheckedCreateNestedManyWithoutUserInputSchema
