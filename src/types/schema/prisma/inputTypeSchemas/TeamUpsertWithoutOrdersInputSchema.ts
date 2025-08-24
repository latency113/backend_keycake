import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamUpdateWithoutOrdersInputSchema } from './TeamUpdateWithoutOrdersInputSchema';
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from './TeamUncheckedUpdateWithoutOrdersInputSchema';
import { TeamCreateWithoutOrdersInputSchema } from './TeamCreateWithoutOrdersInputSchema';
import { TeamUncheckedCreateWithoutOrdersInputSchema } from './TeamUncheckedCreateWithoutOrdersInputSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';

export const TeamUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export default TeamUpsertWithoutOrdersInputSchema;
