import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateWithoutOrdersInputSchema } from "./TeamCreateWithoutOrdersInputSchema"
import { TeamUncheckedCreateWithoutOrdersInputSchema } from "./TeamUncheckedCreateWithoutOrdersInputSchema"
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from "./TeamUncheckedUpdateWithoutOrdersInputSchema"
import { TeamUpdateWithoutOrdersInputSchema } from "./TeamUpdateWithoutOrdersInputSchema"
import { TeamWhereInputSchema } from "./TeamWhereInputSchema"

export const TeamUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpsertWithoutOrdersInput> = z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema)]),
  update: z.union([z.lazy(() => TeamUpdateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema)]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
}).strict()

export default TeamUpsertWithoutOrdersInputSchema
