import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestCreateNestedOneWithoutItemsInputSchema } from './CakeRequestCreateNestedOneWithoutItemsInputSchema';

export const CakeRequestItemsCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutOrderItemInput> = z.object({
  id: z.string().optional(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema)
}).strict();

export default CakeRequestItemsCreateWithoutOrderItemInputSchema;
