import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { DepartmentCreateOrConnectWithoutCakeRequestInputSchema } from "./DepartmentCreateOrConnectWithoutCakeRequestInputSchema"
import { DepartmentCreateWithoutCakeRequestInputSchema } from "./DepartmentCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedCreateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedCreateWithoutCakeRequestInputSchema"
import { DepartmentUncheckedUpdateWithoutCakeRequestInputSchema } from "./DepartmentUncheckedUpdateWithoutCakeRequestInputSchema"
import { DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema } from "./DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema"
import { DepartmentUpdateWithoutCakeRequestInputSchema } from "./DepartmentUpdateWithoutCakeRequestInputSchema"
import { DepartmentUpsertWithoutCakeRequestInputSchema } from "./DepartmentUpsertWithoutCakeRequestInputSchema"
import { DepartmentWhereUniqueInputSchema } from "./DepartmentWhereUniqueInputSchema"

export const DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  create: z.union([z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema)]).optional(),
  update: z.union([z.lazy(() => DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema), z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema)]).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutCakeRequestInputSchema).optional(),
}).strict()

export default DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema
