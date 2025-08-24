import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RequestStatusSchema } from './RequestStatusSchema';
import { EnumRequestStatusFieldUpdateOperationsInputSchema } from './EnumRequestStatusFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema } from './DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema';
import { CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema } from './CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema';

export const CakeRequestUpdateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutUserInput> = z.object({
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export default CakeRequestUpdateWithoutUserInputSchema;
