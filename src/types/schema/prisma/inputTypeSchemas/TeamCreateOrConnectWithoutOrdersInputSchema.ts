import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamCreateWithoutOrdersInputSchema } from './TeamCreateWithoutOrdersInputSchema';
import { TeamUncheckedCreateWithoutOrdersInputSchema } from './TeamUncheckedCreateWithoutOrdersInputSchema';

export const TeamCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export default TeamCreateOrConnectWithoutOrdersInputSchema;
