import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsCreateWithoutProductInputSchema } from './CakeRequestItemsCreateWithoutProductInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from './CakeRequestItemsUncheckedCreateWithoutProductInputSchema';

export const CakeRequestItemsCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default CakeRequestItemsCreateOrConnectWithoutProductInputSchema;
