import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamCreateWithoutOrdersInputSchema } from './TeamCreateWithoutOrdersInputSchema';
import { TeamUncheckedCreateWithoutOrdersInputSchema } from './TeamUncheckedCreateWithoutOrdersInputSchema';
import { TeamCreateOrConnectWithoutOrdersInputSchema } from './TeamCreateOrConnectWithoutOrdersInputSchema';
import { TeamUpsertWithoutOrdersInputSchema } from './TeamUpsertWithoutOrdersInputSchema';
import { TeamWhereInputSchema } from './TeamWhereInputSchema';
import { TeamWhereUniqueInputSchema } from './TeamWhereUniqueInputSchema';
import { TeamUpdateToOneWithWhereWithoutOrdersInputSchema } from './TeamUpdateToOneWithWhereWithoutOrdersInputSchema';
import { TeamUpdateWithoutOrdersInputSchema } from './TeamUpdateWithoutOrdersInputSchema';
import { TeamUncheckedUpdateWithoutOrdersInputSchema } from './TeamUncheckedUpdateWithoutOrdersInputSchema';

export const TeamUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export default TeamUpdateOneWithoutOrdersNestedInputSchema;
