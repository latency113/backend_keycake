import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from "./TeamUncheckedUpdateWithoutOrdersInputSchema"
import { TeamUpdateWithoutOrdersInputSchema } from "./TeamUpdateWithoutOrdersInputSchema"
import { TeamWhereInputSchema } from "./TeamWhereInputSchema"

export const TeamUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  data: z.union([z.lazy(() => TeamUpdateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema)]),
  where: z.lazy(() => TeamWhereInputSchema).optional(),
}).strict()

export default TeamUpdateToOneWithWhereWithoutOrdersInputSchema
