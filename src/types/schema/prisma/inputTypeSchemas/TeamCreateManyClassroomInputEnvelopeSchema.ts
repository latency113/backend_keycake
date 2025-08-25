import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateManyClassroomInputSchema } from './TeamCreateManyClassroomInputSchema';

export const TeamCreateManyClassroomInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyClassroomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamCreateManyClassroomInputSchema),z.lazy(() => TeamCreateManyClassroomInputSchema).array() ]),
}).strict();

export default TeamCreateManyClassroomInputEnvelopeSchema;
