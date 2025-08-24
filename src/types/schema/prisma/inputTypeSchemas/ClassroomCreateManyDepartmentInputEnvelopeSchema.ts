import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomCreateManyDepartmentInputSchema } from './ClassroomCreateManyDepartmentInputSchema';

export const ClassroomCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.ClassroomCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassroomCreateManyDepartmentInputSchema),z.lazy(() => ClassroomCreateManyDepartmentInputSchema).array() ]),
}).strict();

export default ClassroomCreateManyDepartmentInputEnvelopeSchema;
