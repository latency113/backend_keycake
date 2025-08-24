import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutClassroomInputSchema } from './TeamCreateWithoutClassroomInputSchema';
import { TeamUncheckedCreateWithoutClassroomInputSchema } from './TeamUncheckedCreateWithoutClassroomInputSchema';
import { TeamCreateOrConnectWithoutClassroomInputSchema } from './TeamCreateOrConnectWithoutClassroomInputSchema';
import { TeamCreateManyClassroomInputEnvelopeSchema } from './TeamCreateManyClassroomInputEnvelopeSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TeamCreateNestedManyWithoutClassroomInputSchema;
