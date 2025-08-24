import { z } from 'zod';

export const CakeRequestItemsScalarFieldEnumSchema = z.enum(['id','request_id','product_id','order_item_id','quantity']);

export default CakeRequestItemsScalarFieldEnumSchema;
