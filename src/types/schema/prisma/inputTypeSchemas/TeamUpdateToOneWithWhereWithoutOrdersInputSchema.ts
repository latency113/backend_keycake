import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamUpdateWithoutOrdersInputSchema } from './TeamUpdateWithoutOrdersInputSchema';
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from './TeamUncheckedUpdateWithoutOrdersInputSchema';

export const TeamUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export default TeamUpdateToOneWithWhereWithoutOrdersInputSchema;
