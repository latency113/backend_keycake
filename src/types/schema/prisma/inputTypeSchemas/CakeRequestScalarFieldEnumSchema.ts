import { z } from 'zod';

export const CakeRequestScalarFieldEnumSchema = z.enum(['id','requestDate','status','note','user_id','department_id','createdAt','updatedAt']);

export default CakeRequestScalarFieldEnumSchema;
