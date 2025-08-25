import { z } from 'zod';
import { DepartmentSchema } from './modelSchema/DepartmentSchema';
import { ClassroomSchema } from './modelSchema/ClassroomSchema';

export const DepartmentWithClassroomsSchema = DepartmentSchema.extend({
  classrooms: z.array(ClassroomSchema),
});

export type DepartmentWithClassrooms = z.infer<typeof DepartmentWithClassroomsSchema>;
