import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestCreateManyDepartmentInputEnvelopeSchema } from "./CakeRequestCreateManyDepartmentInputEnvelopeSchema"
import { CakeRequestCreateOrConnectWithoutDepartmentInputSchema } from "./CakeRequestCreateOrConnectWithoutDepartmentInputSchema"
import { CakeRequestCreateWithoutDepartmentInputSchema } from "./CakeRequestCreateWithoutDepartmentInputSchema"
import { CakeRequestScalarWhereInputSchema } from "./CakeRequestScalarWhereInputSchema"
import { CakeRequestUncheckedCreateWithoutDepartmentInputSchema } from "./CakeRequestUncheckedCreateWithoutDepartmentInputSchema"
import { CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema } from "./CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema"
import { CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema } from "./CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema"
import { CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema } from "./CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema"
import { CakeRequestWhereUniqueInputSchema } from "./CakeRequestWhereUniqueInputSchema"

export const CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  connect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema), z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array()]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CakeRequestScalarWhereInputSchema), z.lazy(() => CakeRequestScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => CakeRequestWhereUniqueInputSchema), z.lazy(() => CakeRequestWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema), z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema).array()]).optional(),
}).strict()

export default CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema
