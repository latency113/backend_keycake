import { z } from 'zod';
import { ClassroomSchema } from './modelSchema/ClassroomSchema';
import { DepartmentSchema } from './modelSchema/DepartmentSchema';
import { GradeLevelSchema } from './modelSchema/GradeLevelSchema';

export const ClassroomWithDepartmentSchema = ClassroomSchema.extend({
  department: DepartmentSchema,
  grade_level: GradeLevelSchema,
});

export type ClassroomWithDepartment = z.infer<typeof ClassroomWithDepartmentSchema>;
