import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateManyRequestInputSchema } from './CakeRequestItemsCreateManyRequestInputSchema';

export const CakeRequestItemsCreateManyRequestInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema),z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema).array() ]),
}).strict();

export default CakeRequestItemsCreateManyRequestInputEnvelopeSchema;
