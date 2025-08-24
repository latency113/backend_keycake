import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateManyProductInputSchema } from './CakeRequestItemsCreateManyProductInputSchema';

export const CakeRequestItemsCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyProductInputSchema),z.lazy(() => CakeRequestItemsCreateManyProductInputSchema).array() ]),
}).strict();

export default CakeRequestItemsCreateManyProductInputEnvelopeSchema;
