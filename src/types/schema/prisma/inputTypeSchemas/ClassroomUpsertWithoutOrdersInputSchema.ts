import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomUpdateWithoutOrdersInputSchema } from './ClassroomUpdateWithoutOrdersInputSchema';
import { ClassroomUncheckedUpdateWithoutOrdersInputSchema } from './ClassroomUncheckedUpdateWithoutOrdersInputSchema';
import { ClassroomCreateWithoutOrdersInputSchema } from './ClassroomCreateWithoutOrdersInputSchema';
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from './ClassroomUncheckedCreateWithoutOrdersInputSchema';
import { ClassroomWhereInputSchema } from './ClassroomWhereInputSchema';

export const ClassroomUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export default ClassroomUpsertWithoutOrdersInputSchema;
