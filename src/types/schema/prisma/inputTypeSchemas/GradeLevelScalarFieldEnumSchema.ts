import { z } from "zod"

export const GradeLevelScalarFieldEnumSchema = z.enum(["id", "level", "year"])

export default GradeLevelScalarFieldEnumSchema
