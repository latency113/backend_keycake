import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyProductInputEnvelopeSchema } from "./CakeRequestItemsCreateManyProductInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutProductInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutProductInputSchema"
import { CakeRequestItemsCreateWithoutProductInputSchema } from "./CakeRequestItemsCreateWithoutProductInputSchema"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutProductInputSchema"
import { CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema } from "./CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema"
import { CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema } from "./CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema"
import { CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema } from "./CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CakeRequestItemsScalarWhereInputSchema), z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema), z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema).array()]).optional(),
}).strict()

export default CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema
