import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemArgsSchema } from "../outputTypeSchemas/OrderItemArgsSchema"
import { ProductCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProductCountOutputTypeArgsSchema"

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ProductSelectSchema;
