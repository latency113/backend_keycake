import { z } from 'zod';

/////////////////////////////////////////
// DEPARTMENT SCHEMA
/////////////////////////////////////////

export const DepartmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  group_number: z.string(),
})

export type Department = z.infer<typeof DepartmentSchema>

/////////////////////////////////////////
// DEPARTMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const DepartmentPartialSchema = DepartmentSchema.partial()

export type DepartmentPartial = z.infer<typeof DepartmentPartialSchema>

/////////////////////////////////////////
// DEPARTMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DepartmentOptionalDefaultsSchema = DepartmentSchema.merge(z.object({
  id: z.string().optional(),
}))

export type DepartmentOptionalDefaults = z.infer<typeof DepartmentOptionalDefaultsSchema>

export default DepartmentSchema;
