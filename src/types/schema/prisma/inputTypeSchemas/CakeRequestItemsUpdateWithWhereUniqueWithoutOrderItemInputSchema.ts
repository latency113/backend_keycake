import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutOrderItemInputSchema } from './CakeRequestItemsUpdateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema';

export const CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema;
