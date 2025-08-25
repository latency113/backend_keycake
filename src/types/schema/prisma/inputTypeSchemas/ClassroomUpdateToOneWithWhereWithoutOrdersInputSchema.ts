import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';
import { ClassroomUpdateWithoutOrdersInputSchema } from './ClassroomUpdateWithoutOrdersInputSchema';
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from './ClassroomUncheckedUpdateWithoutOrdersInputSchema';

export const ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema;
