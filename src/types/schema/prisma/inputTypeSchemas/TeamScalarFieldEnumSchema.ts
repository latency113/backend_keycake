import { z } from "zod"

export const TeamScalarFieldEnumSchema = z.enum(["id", "name", "classroom_id"])

export default TeamScalarFieldEnumSchema
