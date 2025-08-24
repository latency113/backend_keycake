import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateManyGrade_levelInputSchema } from './ClassroomCreateManyGrade_levelInputSchema';

export const ClassroomCreateManyGrade_levelInputEnvelopeSchema: z.ZodType<Prisma.ClassroomCreateManyGrade_levelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassroomCreateManyGrade_levelInputSchema),z.lazy(() => ClassroomCreateManyGrade_levelInputSchema).array() ]),
}).strict();

export default ClassroomCreateManyGrade_levelInputEnvelopeSchema;
