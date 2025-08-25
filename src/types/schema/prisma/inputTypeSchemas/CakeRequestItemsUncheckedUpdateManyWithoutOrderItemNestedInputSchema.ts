import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema } from "./CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema"
import { CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema"
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsScalarWhereInputSchema } from "./CakeRequestItemsScalarWhereInputSchema"
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from "./CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema"
import { CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema } from "./CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema"
import { CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema } from "./CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema"
import { CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema } from "./CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema"
import { CakeRequestItemsWhereUniqueInputSchema } from "./CakeRequestItemsWhereUniqueInputSchema"

export const CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CakeRequestItemsScalarWhereInputSchema), z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CakeRequestItemsWhereUniqueInputSchema), z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema), z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema).array()]).optional(),
}).strict()

export default CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema
