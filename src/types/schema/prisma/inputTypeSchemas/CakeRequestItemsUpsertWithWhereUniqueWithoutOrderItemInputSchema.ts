import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsWhereUniqueInputSchema } from './CakeRequestItemsWhereUniqueInputSchema';
import { CakeRequestItemsUpdateWithoutOrderItemInputSchema } from './CakeRequestItemsUpdateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema';
import { CakeRequestItemsCreateWithoutOrderItemInputSchema } from './CakeRequestItemsCreateWithoutOrderItemInputSchema';
import { CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema';

export const CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export default CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema;
