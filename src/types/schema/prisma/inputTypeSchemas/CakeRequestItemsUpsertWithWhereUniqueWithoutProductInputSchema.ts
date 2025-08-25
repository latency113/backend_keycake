import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutProductInputSchema } from './CakeRequestItemsUpdateWithoutProductInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutProductInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutProductInputSchema';
import { CakeRequestItemsCreateWithoutProductInputSchema } from './CakeRequestItemsCreateWithoutProductInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutProductInputSchema } from './CakeRequestItemsUncheckedCreateWithoutProductInputSchema';

export const CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export default CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema;
