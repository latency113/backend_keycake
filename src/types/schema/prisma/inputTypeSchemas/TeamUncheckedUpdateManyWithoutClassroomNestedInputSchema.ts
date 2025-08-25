import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutClassroomInputSchema } from './TeamCreateWithoutClassroomInputSchema';
import { TeamUncheckedCreateWithoutClassroomInputSchema } from './TeamUncheckedCreateWithoutClassroomInputSchema';
import { TeamCreateOrConnectWithoutClassroomInputSchema } from './TeamCreateOrConnectWithoutClassroomInputSchema';
import { TeamUpsertWithWhereUniqueWithoutClassroomInputSchema } from './TeamUpsertWithWhereUniqueWithoutClassroomInputSchema';
import { TeamCreateManyClassroomInputEnvelopeSchema } from './TeamCreateManyClassroomInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateWithWhereUniqueWithoutClassroomInputSchema } from './TeamUpdateWithWhereUniqueWithoutClassroomInputSchema';
import { TeamUpdateManyWithWhereWithoutClassroomInputSchema } from './TeamUpdateManyWithWhereWithoutClassroomInputSchema';
import { TeamScalarWhereInputSchema } from './TeamScalarWhereInputSchema';

export const TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema;
