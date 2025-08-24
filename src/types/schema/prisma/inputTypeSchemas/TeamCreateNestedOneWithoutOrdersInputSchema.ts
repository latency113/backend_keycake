import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutOrdersInputSchema } from './TeamCreateWithoutOrdersInputSchema';
import { TeamUncheckedCreateWithoutOrdersInputSchema } from './TeamUncheckedCreateWithoutOrdersInputSchema';
import { TeamCreateOrConnectWithoutOrdersInputSchema } from './TeamCreateOrConnectWithoutOrdersInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';

export const TeamCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export default TeamCreateNestedOneWithoutOrdersInputSchema;
