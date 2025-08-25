import { z } from 'zod';
import { DepartmentSchema } from './../schema/prisma/modelSchema/DepartmentSchema';
import { ClassroomSchema } from './../schema/prisma/modelSchema/ClassroomSchema';

export const DepartmentWithClassroomsSchema = DepartmentSchema.extend({
  classrooms: z.array(ClassroomSchema),
});

export type DepartmentWithClassrooms = z.infer<typeof DepartmentWithClassroomsSchema>;
