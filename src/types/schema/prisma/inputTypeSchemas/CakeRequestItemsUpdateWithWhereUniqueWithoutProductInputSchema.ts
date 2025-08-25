import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutProductInputSchema } from './CakeRequestItemsUpdateWithoutProductInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutProductInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutProductInputSchema';

export const CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema;
