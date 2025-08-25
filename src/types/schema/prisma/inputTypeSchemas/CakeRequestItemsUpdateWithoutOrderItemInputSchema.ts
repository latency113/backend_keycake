import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema } from './CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema';

export const CakeRequestItemsUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutOrderItemInput> = z.object({
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export default CakeRequestItemsUpdateWithoutOrderItemInputSchema;
