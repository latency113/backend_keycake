import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateWithoutOrdersInputSchema } from "./TeamCreateWithoutOrdersInputSchema"
import { TeamUncheckedCreateWithoutOrdersInputSchema } from "./TeamUncheckedCreateWithoutOrdersInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutOrdersInput> = z.object({
  create: z.union([z.lazy(() => TeamCreateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema)]),
  where: z.lazy(() => TeamWhereUniqueInputSchema),
}).strict()

export default TeamCreateOrConnectWithoutOrdersInputSchema
