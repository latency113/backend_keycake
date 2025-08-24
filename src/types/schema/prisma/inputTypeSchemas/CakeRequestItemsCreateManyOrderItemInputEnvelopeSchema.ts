import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsCreateManyOrderItemInputSchema } from './CakeRequestItemsCreateManyOrderItemInputSchema';

export const CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyOrderItemInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateManyOrderItemInputSchema).array() ]),
}).strict();

export default CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema;
