import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateManyUserInputEnvelopeSchema } from "./CakeRequestCreateManyUserInputEnvelopeSchema"
import { CakeRequestCreateOrConnectWithoutUserInputSchema } from "./CakeRequestCreateOrConnectWithoutUserInputSchema"
import { CakeRequestCreateWithoutUserInputSchema } from "./CakeRequestCreateWithoutUserInputSchema"
import { CakeRequestScalarWhereInputSchema } from "./CakeRequestScalarWhereInputSchema"
import { CakeRequestUncheckedCreateWithoutUserInputSchema } from "./CakeRequestUncheckedCreateWithoutUserInputSchema"
import { CakeRequestUpdateManyWithWhereWithoutUserInputSchema } from "./CakeRequestUpdateManyWithWhereWithoutUserInputSchema"
import { CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema } from "./CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema"
import { CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema } from "./CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema), z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutUserInputSchema), z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CakeRequestScalarWhereInputSchema), z.lazy(() => CakeRequestScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema).array()]).optional(),
}).strict()

export default CakeRequestUncheckedUpdateManyWithoutUserNestedInputSchema
