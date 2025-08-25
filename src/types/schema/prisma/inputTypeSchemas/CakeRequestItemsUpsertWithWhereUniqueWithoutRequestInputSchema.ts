import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutRequestInputSchema } from './CakeRequestItemsUpdateWithoutRequestInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema';
import { CakeRequestItemsCreateWithoutRequestInputSchema } from './CakeRequestItemsCreateWithoutRequestInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutRequestInputSchema } from './CakeRequestItemsUncheckedCreateWithoutRequestInputSchema';

export const CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema) ]),
}).strict();

export default CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema;
