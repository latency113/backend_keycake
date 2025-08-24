import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestItemsScalarWhereInputSchema } from './CakeRequestItemsScalarWhereInputSchema';
import { CakeRequestItemsUpdateManyMutationInputSchema } from './CakeRequestItemsUpdateManyMutationInputSchema';
import { CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema } from './CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema';

export const CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema) ]),
}).strict();

export default CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema;
