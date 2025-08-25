import { z } from 'zod';
import { TeamSchema } from './../schema/prisma/modelSchema/TeamSchema';
import { ClassroomSchema } from './../schema/prisma/modelSchema/ClassroomSchema';

export const TeamWithClassroomSchema = TeamSchema.extend({
  classroom: ClassroomSchema,
});

export type TeamWithClassroom = z.infer<typeof TeamWithClassroomSchema>;
