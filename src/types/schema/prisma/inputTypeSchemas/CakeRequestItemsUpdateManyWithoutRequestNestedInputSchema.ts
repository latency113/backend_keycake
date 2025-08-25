import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyRequestInputEnvelopeSchema } from "./CakeRequestItemsCreateManyRequestInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutRequestInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutRequestInputSchema"
import { CakeRequestItemsCreateWithoutRequestInputSchema } from "./CakeRequestItemsCreateWithoutRequestInputSchema"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutRequestInputSchema"
import { CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema } from "./CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema"
import { CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema } from "./CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema"
import { CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema } from "./CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithoutRequestNestedInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CakeRequestItemsScalarWhereInputSchema), z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema), z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema).array()]).optional(),
}).strict()

export default CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema
