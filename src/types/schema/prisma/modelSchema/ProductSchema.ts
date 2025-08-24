import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// PRODUCT PARTIAL SCHEMA
/////////////////////////////////////////

export const ProductPartialSchema = ProductSchema.partial()

export type ProductPartial = z.infer<typeof ProductPartialSchema>

/////////////////////////////////////////
// PRODUCT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProductOptionalDefaultsSchema = ProductSchema.merge(z.object({
  id: z.string().optional(),
}))

export type ProductOptionalDefaults = z.infer<typeof ProductOptionalDefaultsSchema>

export default ProductSchema;
