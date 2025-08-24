import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutRequestInputSchema } from './CakeRequestItemsUpdateWithoutRequestInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema';

export const CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema;
