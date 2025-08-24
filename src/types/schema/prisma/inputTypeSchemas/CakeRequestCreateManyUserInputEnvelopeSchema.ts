import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateManyUserInputSchema } from './CakeRequestCreateManyUserInputSchema';

export const CakeRequestCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestCreateManyUserInputSchema),z.lazy(() => CakeRequestCreateManyUserInputSchema).array() ]),
}).strict();

export default CakeRequestCreateManyUserInputEnvelopeSchema;
