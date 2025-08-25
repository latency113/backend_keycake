import { z } from "zod"

export const ClassroomScalarFieldEnumSchema = z.enum(["id", "name", "department_id", "grade_level_id"])

export default ClassroomScalarFieldEnumSchema
