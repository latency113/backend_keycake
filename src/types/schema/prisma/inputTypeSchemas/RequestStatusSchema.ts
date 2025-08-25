import { z } from 'zod';

export const RequestStatusSchema = z.enum(['pending','approved','rejected']);

export type RequestStatusType = `${z.infer<typeof RequestStatusSchema>}`

export default RequestStatusSchema;
