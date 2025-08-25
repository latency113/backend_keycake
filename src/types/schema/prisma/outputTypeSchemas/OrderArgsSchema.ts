import type { Prisma } from "@prisma/client"
import { z } from "zod"
import { OrderIncludeSchema } from "../inputTypeSchemas/OrderIncludeSchema"
import { OrderSelectSchema } from "../inputTypeSchemas/OrderSelectSchema"

export const OrderArgsSchema: z.ZodType<Prisma.OrderDefaultArgs> = z.object({
  include: z.lazy(() => OrderIncludeSchema).optional(),
  select: z.lazy(() => OrderSelectSchema).optional(),
}).strict()

export default OrderArgsSchema
