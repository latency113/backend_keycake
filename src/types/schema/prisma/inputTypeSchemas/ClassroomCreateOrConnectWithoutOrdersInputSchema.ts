import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClassroomWhereUniqueInputSchema } from './ClassroomWhereUniqueInputSchema';
import { ClassroomCreateWithoutOrdersInputSchema } from './ClassroomCreateWithoutOrdersInputSchema';
import { ClassroomUncheckedCreateWithoutOrdersInputSchema } from './ClassroomUncheckedCreateWithoutOrdersInputSchema';

export const ClassroomCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default ClassroomCreateOrConnectWithoutOrdersInputSchema;
