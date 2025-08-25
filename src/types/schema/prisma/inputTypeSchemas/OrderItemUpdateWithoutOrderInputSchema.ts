import type { Prisma } from "@prisma/client"

import { z } from "zod"
import { CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema } from "./CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema"
import { DateTimeFieldUpdateOperationsInputSchema } from "./DateTimeFieldUpdateOperationsInputSchema"
import { FloatFieldUpdateOperationsInputSchema } from "./FloatFieldUpdateOperationsInputSchema"
import { IntFieldUpdateOperationsInputSchema } from "./IntFieldUpdateOperationsInputSchema"
import { ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema } from "./ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema"

export const OrderItemUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput> = z.object({
  CakeRequestItems: z.lazy(() => CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  pound: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  quantity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  subtotal: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  unitPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
}).strict()

export default OrderItemUpdateWithoutOrderInputSchema
