import { z } from 'zod';
import { TeamSchema } from './modelSchema/TeamSchema';
import { ClassroomSchema } from './modelSchema/ClassroomSchema';

export const TeamWithClassroomSchema = TeamSchema.extend({
  classroom: ClassroomSchema,
});

export type TeamWithClassroom = z.infer<typeof TeamWithClassroomSchema>;
