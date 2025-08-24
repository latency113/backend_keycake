import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from './CakeRequestItemsCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema';

export const CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export default CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema;
