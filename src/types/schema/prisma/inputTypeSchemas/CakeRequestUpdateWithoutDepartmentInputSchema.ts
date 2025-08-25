import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RequestStatusSchema } from './RequestStatusSchema';
import { EnumRequestStatusFieldUpdateOperationsInputSchema } from './EnumRequestStatusFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema } from './UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema';
import { CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema } from './CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema';

export const CakeRequestUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutDepartmentInput> = z.object({
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export default CakeRequestUpdateWithoutDepartmentInputSchema;
