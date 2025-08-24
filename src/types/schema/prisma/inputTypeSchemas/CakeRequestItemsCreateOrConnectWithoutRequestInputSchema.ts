import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsCreateWithoutRequestInputSchema } from './CakeRequestItemsCreateWithoutRequestInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from './CakeRequestItemsUncheckedCreateWithoutRequestInputSchema';

export const CakeRequestItemsCreateOrConnectWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema) ]),
}).strict();

export default CakeRequestItemsCreateOrConnectWithoutRequestInputSchema;
