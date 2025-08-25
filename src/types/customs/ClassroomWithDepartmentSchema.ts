import { z } from 'zod';
import { ClassroomSchema } from './../schema/prisma/modelSchema/ClassroomSchema';
import { DepartmentSchema } from './../schema/prisma/modelSchema/DepartmentSchema';
import { GradeLevelSchema } from './../schema/prisma/modelSchema/GradeLevelSchema';

export const ClassroomWithDepartmentSchema = ClassroomSchema.extend({
  department: DepartmentSchema,
  grade_level: GradeLevelSchema,
});

export type ClassroomWithDepartment = z.infer<typeof ClassroomWithDepartmentSchema>;
