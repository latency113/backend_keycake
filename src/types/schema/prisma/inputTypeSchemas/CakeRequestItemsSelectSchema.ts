import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CakeRequestArgsSchema } from "../outputTypeSchemas/CakeRequestArgsSchema"
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"

export const CakeRequestItemsSelectSchema: z.ZodType<Prisma.CakeRequestItemsSelect> = z.object({
  id: z.boolean().optional(),
  request_id: z.boolean().optional(),
  order_item_id: z.boolean().optional(),
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
}).strict()

export default CakeRequestItemsSelectSchema;
