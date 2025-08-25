import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateManyClassroomInputEnvelopeSchema } from "./TeamCreateManyClassroomInputEnvelopeSchema"
import { TeamCreateOrConnectWithoutClassroomInputSchema } from "./TeamCreateOrConnectWithoutClassroomInputSchema"
import { TeamCreateWithoutClassroomInputSchema } from "./TeamCreateWithoutClassroomInputSchema"
import { TeamUncheckedCreateWithoutClassroomInputSchema } from "./TeamUncheckedCreateWithoutClassroomInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamUncheckedCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutClassroomInput> = z.object({
  connect: z.union([z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema), z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => TeamCreateWithoutClassroomInputSchema), z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
}).strict()

export default TeamUncheckedCreateNestedManyWithoutClassroomInputSchema
