import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateOrConnectWithoutOrdersInputSchema } from "./TeamCreateOrConnectWithoutOrdersInputSchema"
import { TeamCreateWithoutOrdersInputSchema } from "./TeamCreateWithoutOrdersInputSchema"
import { TeamUncheckedCreateWithoutOrdersInputSchema } from "./TeamUncheckedCreateWithoutOrdersInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutOrdersInput> = z.object({
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  create: z.union([z.lazy(() => TeamCreateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema)]).optional(),
}).strict()

export default TeamCreateNestedOneWithoutOrdersInputSchema
