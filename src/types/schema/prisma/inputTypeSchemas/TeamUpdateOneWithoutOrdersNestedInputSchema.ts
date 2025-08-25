import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateOrConnectWithoutOrdersInputSchema } from "./TeamCreateOrConnectWithoutOrdersInputSchema"
import { TeamCreateWithoutOrdersInputSchema } from "./TeamCreateWithoutOrdersInputSchema"
import { TeamUncheckedCreateWithoutOrdersInputSchema } from "./TeamUncheckedCreateWithoutOrdersInputSchema"
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from "./TeamUncheckedUpdateWithoutOrdersInputSchema"
import { TeamUpdateToOneWithWhereWithoutOrdersInputSchema } from "./TeamUpdateToOneWithWhereWithoutOrdersInputSchema"
import { TeamUpdateWithoutOrdersInputSchema } from "./TeamUpdateWithoutOrdersInputSchema"
import { TeamUpsertWithoutOrdersInputSchema } from "./TeamUpsertWithoutOrdersInputSchema"
import { TeamWhereInputSchema } from "./TeamWhereInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutOrdersNestedInput> = z.object({
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  create: z.union([z.lazy(() => TeamCreateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TeamWhereInputSchema)]).optional(),
  disconnect: z.boolean().optional(),
  update: z.union([z.lazy(() => TeamUpdateToOneWithWhereWithoutOrdersInputSchema), z.lazy(() => TeamUpdateWithoutOrdersInputSchema), z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema)]).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutOrdersInputSchema).optional(),
}).strict()

export default TeamUpdateOneWithoutOrdersNestedInputSchema
