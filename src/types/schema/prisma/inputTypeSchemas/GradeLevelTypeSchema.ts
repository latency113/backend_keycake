import { z } from 'zod';

export const GradeLevelTypeSchema = z.enum(['VOCATIONAL','HIGHER']);

export type GradeLevelTypeType = `${z.infer<typeof GradeLevelTypeSchema>}`

export default GradeLevelTypeSchema;
