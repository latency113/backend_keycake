import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { TeamCreateManyClassroomInputEnvelopeSchema } from "./TeamCreateManyClassroomInputEnvelopeSchema"
import { TeamCreateOrConnectWithoutClassroomInputSchema } from "./TeamCreateOrConnectWithoutClassroomInputSchema"
import { TeamCreateWithoutClassroomInputSchema } from "./TeamCreateWithoutClassroomInputSchema"
import { TeamScalarWhereInputSchema } from "./TeamScalarWhereInputSchema"
import { TeamUncheckedCreateWithoutClassroomInputSchema } from "./TeamUncheckedCreateWithoutClassroomInputSchema"
import { TeamUpdateManyWithWhereWithoutClassroomInputSchema } from "./TeamUpdateManyWithWhereWithoutClassroomInputSchema"
import { TeamUpdateWithWhereUniqueWithoutClassroomInputSchema } from "./TeamUpdateWithWhereUniqueWithoutClassroomInputSchema"
import { TeamUpsertWithWhereUniqueWithoutClassroomInputSchema } from "./TeamUpsertWithWhereUniqueWithoutClassroomInputSchema"
import { TeamWhereUniqueInputSchema } from "./TeamWhereUniqueInputSchema"

export const TeamUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutClassroomNestedInput> = z.object({
  connect: z.union([z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema), z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array()]).optional(),
  create: z.union([z.lazy(() => TeamCreateWithoutClassroomInputSchema), z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema), z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array()]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  delete: z.union([z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TeamScalarWhereInputSchema), z.lazy(() => TeamScalarWhereInputSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array()]).optional(),
  set: z.union([z.lazy(() => TeamWhereUniqueInputSchema), z.lazy(() => TeamWhereUniqueInputSchema).array()]).optional(),
  update: z.union([z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema), z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema), z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema), z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema).array()]).optional(),
}).strict()

export default TeamUpdateManyWithoutClassroomNestedInputSchema
