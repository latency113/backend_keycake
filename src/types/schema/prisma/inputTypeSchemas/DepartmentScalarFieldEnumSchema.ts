import { z } from "zod"

export const DepartmentScalarFieldEnumSchema = z.enum(["id", "name", "group_number"])

export default DepartmentScalarFieldEnumSchema
