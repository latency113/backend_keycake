import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';
import { CakeRequestItemsUpdateManyMutationInputSchema } from './CakeRequestItemsUpdateManyMutationInputSchema';
import { CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema } from './CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema';

export const CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema;
