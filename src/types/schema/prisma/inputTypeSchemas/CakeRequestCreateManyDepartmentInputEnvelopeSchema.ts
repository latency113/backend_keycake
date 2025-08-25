import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateManyDepartmentInputSchema } from './CakeRequestCreateManyDepartmentInputSchema';

export const CakeRequestCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestCreateManyDepartmentInputSchema),z.lazy(() => CakeRequestCreateManyDepartmentInputSchema).array() ]),
}).strict();

export default CakeRequestCreateManyDepartmentInputEnvelopeSchema;
