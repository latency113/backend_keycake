import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';
import { CakeRequestItemsUpdateManyMutationInputSchema } from './CakeRequestItemsUpdateManyMutationInputSchema';
import { CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema } from './CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema';

export const CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema;
