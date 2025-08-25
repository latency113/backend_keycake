import { z } from 'zod';

/////////////////////////////////////////
// CAKE REQUEST ITEMS SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsSchema = z.object({
  id: z.string(),
  request_id: z.string(),
  order_item_id: z.string(),
})

export type CakeRequestItems = z.infer<typeof CakeRequestItemsSchema>

/////////////////////////////////////////
// CAKE REQUEST ITEMS PARTIAL SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsPartialSchema = CakeRequestItemsSchema.partial()

export type CakeRequestItemsPartial = z.infer<typeof CakeRequestItemsPartialSchema>

/////////////////////////////////////////
// CAKE REQUEST ITEMS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsOptionalDefaultsSchema = CakeRequestItemsSchema.merge(z.object({
  id: z.string().optional(),
}))

export type CakeRequestItemsOptionalDefaults = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema>

export default CakeRequestItemsSchema;
