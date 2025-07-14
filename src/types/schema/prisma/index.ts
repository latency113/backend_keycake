import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const BranchScalarFieldEnumSchema = z.enum(['id','name','group_number']);

export const RoomScalarFieldEnumSchema = z.enum(['id','name','branch_id','grade_level_id']);

export const GradeLevelScalarFieldEnumSchema = z.enum(['id','level','year']);

export const UserScalarFieldEnumSchema = z.enum(['id','fname','lastname','username','password','email','role','createdAt','updatedAt']);

export const TeamScalarFieldEnumSchema = z.enum(['id','name','room_id']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','price','unit_id']);

export const UnitScalarFieldEnumSchema = z.enum(['id','name_th','name_en']);

export const OrderScalarFieldEnumSchema = z.enum(['id','customerName','room_id','team_id','orderDate','totalPrice','book_number','number','createdAt','updatedAt']);

export const OrderItemScalarFieldEnumSchema = z.enum(['id','order_id','product_id','quantity','unitPrice','subtotal','createdAt','updatedAt']);

export const CakeCountScalarFieldEnumSchema = z.enum(['id','product_id','pound','quantity']);

export const CakeRequestScalarFieldEnumSchema = z.enum(['id','requestDate','status','note','user_id','branch_id','createdAt','updatedAt']);

export const CakeRequestItemsScalarFieldEnumSchema = z.enum(['id','request_id','product_id','quantity']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const RoleSchema = z.enum(['ADMIN','OFFICER','USER']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export const CakePoundSchema = z.enum(['ONE','TWO','THREE','FOUR','FIVE']);

export type CakePoundType = `${z.infer<typeof CakePoundSchema>}`

export const GradeLevelTypeSchema = z.enum(['VOCATIONAL','HIGHER']);

export type GradeLevelTypeType = `${z.infer<typeof GradeLevelTypeSchema>}`

export const RequestStatusSchema = z.enum(['pending','approved','rejected']);

export type RequestStatusType = `${z.infer<typeof RequestStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BRANCH SCHEMA
/////////////////////////////////////////

export const BranchSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  group_number: z.string(),
})

export type Branch = z.infer<typeof BranchSchema>

/////////////////////////////////////////
// BRANCH PARTIAL SCHEMA
/////////////////////////////////////////

export const BranchPartialSchema = BranchSchema.partial()

export type BranchPartial = z.infer<typeof BranchPartialSchema>

// BRANCH OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const BranchOptionalDefaultsSchema = BranchSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type BranchOptionalDefaults = z.infer<typeof BranchOptionalDefaultsSchema>

// BRANCH RELATION SCHEMA
//------------------------------------------------------

export type BranchRelations = {
  rooms: RoomWithRelations[];
  CakeRequest: CakeRequestWithRelations[];
};

export type BranchWithRelations = z.infer<typeof BranchSchema> & BranchRelations

export const BranchWithRelationsSchema: z.ZodType<BranchWithRelations> = BranchSchema.merge(z.object({
  rooms: z.lazy(() => RoomWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestWithRelationsSchema).array(),
}))

// BRANCH OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type BranchOptionalDefaultsRelations = {
  rooms: RoomOptionalDefaultsWithRelations[];
  CakeRequest: CakeRequestOptionalDefaultsWithRelations[];
};

export type BranchOptionalDefaultsWithRelations = z.infer<typeof BranchOptionalDefaultsSchema> & BranchOptionalDefaultsRelations

export const BranchOptionalDefaultsWithRelationsSchema: z.ZodType<BranchOptionalDefaultsWithRelations> = BranchOptionalDefaultsSchema.merge(z.object({
  rooms: z.lazy(() => RoomOptionalDefaultsWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestOptionalDefaultsWithRelationsSchema).array(),
}))

// BRANCH PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type BranchPartialRelations = {
  rooms?: RoomPartialWithRelations[];
  CakeRequest?: CakeRequestPartialWithRelations[];
};

export type BranchPartialWithRelations = z.infer<typeof BranchPartialSchema> & BranchPartialRelations

export const BranchPartialWithRelationsSchema: z.ZodType<BranchPartialWithRelations> = BranchPartialSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
})).partial()

export type BranchOptionalDefaultsWithPartialRelations = z.infer<typeof BranchOptionalDefaultsSchema> & BranchPartialRelations

export const BranchOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BranchOptionalDefaultsWithPartialRelations> = BranchOptionalDefaultsSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

export type BranchWithPartialRelations = z.infer<typeof BranchSchema> & BranchPartialRelations

export const BranchWithPartialRelationsSchema: z.ZodType<BranchWithPartialRelations> = BranchSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// ROOM SCHEMA
/////////////////////////////////////////

export const RoomSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  branch_id: z.string(),
  grade_level_id: z.string(),
})

export type Room = z.infer<typeof RoomSchema>

/////////////////////////////////////////
// ROOM PARTIAL SCHEMA
/////////////////////////////////////////

export const RoomPartialSchema = RoomSchema.partial()

export type RoomPartial = z.infer<typeof RoomPartialSchema>

// ROOM OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const RoomOptionalDefaultsSchema = RoomSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type RoomOptionalDefaults = z.infer<typeof RoomOptionalDefaultsSchema>

// ROOM RELATION SCHEMA
//------------------------------------------------------

export type RoomRelations = {
  branch: BranchWithRelations;
  grade_level?: GradeLevelWithRelations | null;
  teams: TeamWithRelations[];
  orders: OrderWithRelations[];
};

export type RoomWithRelations = z.infer<typeof RoomSchema> & RoomRelations

export const RoomWithRelationsSchema: z.ZodType<RoomWithRelations> = RoomSchema.merge(z.object({
  branch: z.lazy(() => BranchWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamWithRelationsSchema).array(),
  orders: z.lazy(() => OrderWithRelationsSchema).array(),
}))

// ROOM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type RoomOptionalDefaultsRelations = {
  branch: BranchOptionalDefaultsWithRelations;
  grade_level?: GradeLevelOptionalDefaultsWithRelations | null;
  teams: TeamOptionalDefaultsWithRelations[];
  orders: OrderOptionalDefaultsWithRelations[];
};

export type RoomOptionalDefaultsWithRelations = z.infer<typeof RoomOptionalDefaultsSchema> & RoomOptionalDefaultsRelations

export const RoomOptionalDefaultsWithRelationsSchema: z.ZodType<RoomOptionalDefaultsWithRelations> = RoomOptionalDefaultsSchema.merge(z.object({
  branch: z.lazy(() => BranchOptionalDefaultsWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelOptionalDefaultsWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamOptionalDefaultsWithRelationsSchema).array(),
  orders: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema).array(),
}))

// ROOM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type RoomPartialRelations = {
  branch?: BranchPartialWithRelations;
  grade_level?: GradeLevelPartialWithRelations | null;
  teams?: TeamPartialWithRelations[];
  orders?: OrderPartialWithRelations[];
};

export type RoomPartialWithRelations = z.infer<typeof RoomPartialSchema> & RoomPartialRelations

export const RoomPartialWithRelationsSchema: z.ZodType<RoomPartialWithRelations> = RoomPartialSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
})).partial()

export type RoomOptionalDefaultsWithPartialRelations = z.infer<typeof RoomOptionalDefaultsSchema> & RoomPartialRelations

export const RoomOptionalDefaultsWithPartialRelationsSchema: z.ZodType<RoomOptionalDefaultsWithPartialRelations> = RoomOptionalDefaultsSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

export type RoomWithPartialRelations = z.infer<typeof RoomSchema> & RoomPartialRelations

export const RoomWithPartialRelationsSchema: z.ZodType<RoomWithPartialRelations> = RoomSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// GRADE LEVEL SCHEMA
/////////////////////////////////////////

export const GradeLevelSchema = z.object({
  level: GradeLevelTypeSchema,
  id: z.string().cuid(),
  year: z.number().int(),
})

export type GradeLevel = z.infer<typeof GradeLevelSchema>

/////////////////////////////////////////
// GRADE LEVEL PARTIAL SCHEMA
/////////////////////////////////////////

export const GradeLevelPartialSchema = GradeLevelSchema.partial()

export type GradeLevelPartial = z.infer<typeof GradeLevelPartialSchema>

// GRADE LEVEL OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const GradeLevelOptionalDefaultsSchema = GradeLevelSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type GradeLevelOptionalDefaults = z.infer<typeof GradeLevelOptionalDefaultsSchema>

// GRADE LEVEL RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelRelations = {
  rooms: RoomWithRelations[];
};

export type GradeLevelWithRelations = z.infer<typeof GradeLevelSchema> & GradeLevelRelations

export const GradeLevelWithRelationsSchema: z.ZodType<GradeLevelWithRelations> = GradeLevelSchema.merge(z.object({
  rooms: z.lazy(() => RoomWithRelationsSchema).array(),
}))

// GRADE LEVEL OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelOptionalDefaultsRelations = {
  rooms: RoomOptionalDefaultsWithRelations[];
};

export type GradeLevelOptionalDefaultsWithRelations = z.infer<typeof GradeLevelOptionalDefaultsSchema> & GradeLevelOptionalDefaultsRelations

export const GradeLevelOptionalDefaultsWithRelationsSchema: z.ZodType<GradeLevelOptionalDefaultsWithRelations> = GradeLevelOptionalDefaultsSchema.merge(z.object({
  rooms: z.lazy(() => RoomOptionalDefaultsWithRelationsSchema).array(),
}))

// GRADE LEVEL PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelPartialRelations = {
  rooms?: RoomPartialWithRelations[];
};

export type GradeLevelPartialWithRelations = z.infer<typeof GradeLevelPartialSchema> & GradeLevelPartialRelations

export const GradeLevelPartialWithRelationsSchema: z.ZodType<GradeLevelPartialWithRelations> = GradeLevelPartialSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
})).partial()

export type GradeLevelOptionalDefaultsWithPartialRelations = z.infer<typeof GradeLevelOptionalDefaultsSchema> & GradeLevelPartialRelations

export const GradeLevelOptionalDefaultsWithPartialRelationsSchema: z.ZodType<GradeLevelOptionalDefaultsWithPartialRelations> = GradeLevelOptionalDefaultsSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
}).partial())

export type GradeLevelWithPartialRelations = z.infer<typeof GradeLevelSchema> & GradeLevelPartialRelations

export const GradeLevelWithPartialRelationsSchema: z.ZodType<GradeLevelWithPartialRelations> = GradeLevelSchema.merge(z.object({
  rooms: z.lazy(() => RoomPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().cuid(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>

// USER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  role: RoleSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

// USER RELATION SCHEMA
//------------------------------------------------------

export type UserRelations = {
  CakeRequest: CakeRequestWithRelations[];
};

export type UserWithRelations = z.infer<typeof UserSchema> & UserRelations

export const UserWithRelationsSchema: z.ZodType<UserWithRelations> = UserSchema.merge(z.object({
  CakeRequest: z.lazy(() => CakeRequestWithRelationsSchema).array(),
}))

// USER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type UserOptionalDefaultsRelations = {
  CakeRequest: CakeRequestOptionalDefaultsWithRelations[];
};

export type UserOptionalDefaultsWithRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserOptionalDefaultsRelations

export const UserOptionalDefaultsWithRelationsSchema: z.ZodType<UserOptionalDefaultsWithRelations> = UserOptionalDefaultsSchema.merge(z.object({
  CakeRequest: z.lazy(() => CakeRequestOptionalDefaultsWithRelationsSchema).array(),
}))

// USER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type UserPartialRelations = {
  CakeRequest?: CakeRequestPartialWithRelations[];
};

export type UserPartialWithRelations = z.infer<typeof UserPartialSchema> & UserPartialRelations

export const UserPartialWithRelationsSchema: z.ZodType<UserPartialWithRelations> = UserPartialSchema.merge(z.object({
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
})).partial()

export type UserOptionalDefaultsWithPartialRelations = z.infer<typeof UserOptionalDefaultsSchema> & UserPartialRelations

export const UserOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserOptionalDefaultsWithPartialRelations> = UserOptionalDefaultsSchema.merge(z.object({
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

export type UserWithPartialRelations = z.infer<typeof UserSchema> & UserPartialRelations

export const UserWithPartialRelationsSchema: z.ZodType<UserWithPartialRelations> = UserSchema.merge(z.object({
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// TEAM SCHEMA
/////////////////////////////////////////

export const TeamSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  room_id: z.string(),
})

export type Team = z.infer<typeof TeamSchema>

/////////////////////////////////////////
// TEAM PARTIAL SCHEMA
/////////////////////////////////////////

export const TeamPartialSchema = TeamSchema.partial()

export type TeamPartial = z.infer<typeof TeamPartialSchema>

// TEAM OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const TeamOptionalDefaultsSchema = TeamSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type TeamOptionalDefaults = z.infer<typeof TeamOptionalDefaultsSchema>

// TEAM RELATION SCHEMA
//------------------------------------------------------

export type TeamRelations = {
  room: RoomWithRelations;
  orders: OrderWithRelations[];
};

export type TeamWithRelations = z.infer<typeof TeamSchema> & TeamRelations

export const TeamWithRelationsSchema: z.ZodType<TeamWithRelations> = TeamSchema.merge(z.object({
  room: z.lazy(() => RoomWithRelationsSchema),
  orders: z.lazy(() => OrderWithRelationsSchema).array(),
}))

// TEAM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type TeamOptionalDefaultsRelations = {
  room: RoomOptionalDefaultsWithRelations;
  orders: OrderOptionalDefaultsWithRelations[];
};

export type TeamOptionalDefaultsWithRelations = z.infer<typeof TeamOptionalDefaultsSchema> & TeamOptionalDefaultsRelations

export const TeamOptionalDefaultsWithRelationsSchema: z.ZodType<TeamOptionalDefaultsWithRelations> = TeamOptionalDefaultsSchema.merge(z.object({
  room: z.lazy(() => RoomOptionalDefaultsWithRelationsSchema),
  orders: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema).array(),
}))

// TEAM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TeamPartialRelations = {
  room?: RoomPartialWithRelations;
  orders?: OrderPartialWithRelations[];
};

export type TeamPartialWithRelations = z.infer<typeof TeamPartialSchema> & TeamPartialRelations

export const TeamPartialWithRelationsSchema: z.ZodType<TeamPartialWithRelations> = TeamPartialSchema.merge(z.object({
  room: z.lazy(() => RoomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
})).partial()

export type TeamOptionalDefaultsWithPartialRelations = z.infer<typeof TeamOptionalDefaultsSchema> & TeamPartialRelations

export const TeamOptionalDefaultsWithPartialRelationsSchema: z.ZodType<TeamOptionalDefaultsWithPartialRelations> = TeamOptionalDefaultsSchema.merge(z.object({
  room: z.lazy(() => RoomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

export type TeamWithPartialRelations = z.infer<typeof TeamSchema> & TeamPartialRelations

export const TeamWithPartialRelationsSchema: z.ZodType<TeamWithPartialRelations> = TeamSchema.merge(z.object({
  room: z.lazy(() => RoomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// PRODUCT PARTIAL SCHEMA
/////////////////////////////////////////

export const ProductPartialSchema = ProductSchema.partial()

export type ProductPartial = z.infer<typeof ProductPartialSchema>

// PRODUCT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ProductOptionalDefaultsSchema = ProductSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ProductOptionalDefaults = z.infer<typeof ProductOptionalDefaultsSchema>

// PRODUCT RELATION SCHEMA
//------------------------------------------------------

export type ProductRelations = {
  unit: UnitWithRelations;
  orderItems: OrderItemWithRelations[];
  cakeCounts: CakeCountWithRelations[];
  items: CakeRequestItemsWithRelations[];
};

export type ProductWithRelations = z.infer<typeof ProductSchema> & ProductRelations

export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> = ProductSchema.merge(z.object({
  unit: z.lazy(() => UnitWithRelationsSchema),
  orderItems: z.lazy(() => OrderItemWithRelationsSchema).array(),
  cakeCounts: z.lazy(() => CakeCountWithRelationsSchema).array(),
  items: z.lazy(() => CakeRequestItemsWithRelationsSchema).array(),
}))

// PRODUCT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type ProductOptionalDefaultsRelations = {
  unit: UnitOptionalDefaultsWithRelations;
  orderItems: OrderItemOptionalDefaultsWithRelations[];
  cakeCounts: CakeCountOptionalDefaultsWithRelations[];
  items: CakeRequestItemsOptionalDefaultsWithRelations[];
};

export type ProductOptionalDefaultsWithRelations = z.infer<typeof ProductOptionalDefaultsSchema> & ProductOptionalDefaultsRelations

export const ProductOptionalDefaultsWithRelationsSchema: z.ZodType<ProductOptionalDefaultsWithRelations> = ProductOptionalDefaultsSchema.merge(z.object({
  unit: z.lazy(() => UnitOptionalDefaultsWithRelationsSchema),
  orderItems: z.lazy(() => OrderItemOptionalDefaultsWithRelationsSchema).array(),
  cakeCounts: z.lazy(() => CakeCountOptionalDefaultsWithRelationsSchema).array(),
  items: z.lazy(() => CakeRequestItemsOptionalDefaultsWithRelationsSchema).array(),
}))

// PRODUCT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ProductPartialRelations = {
  unit?: UnitPartialWithRelations;
  orderItems?: OrderItemPartialWithRelations[];
  cakeCounts?: CakeCountPartialWithRelations[];
  items?: CakeRequestItemsPartialWithRelations[];
};

export type ProductPartialWithRelations = z.infer<typeof ProductPartialSchema> & ProductPartialRelations

export const ProductPartialWithRelationsSchema: z.ZodType<ProductPartialWithRelations> = ProductPartialSchema.merge(z.object({
  unit: z.lazy(() => UnitPartialWithRelationsSchema),
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  cakeCounts: z.lazy(() => CakeCountPartialWithRelationsSchema).array(),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
})).partial()

export type ProductOptionalDefaultsWithPartialRelations = z.infer<typeof ProductOptionalDefaultsSchema> & ProductPartialRelations

export const ProductOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ProductOptionalDefaultsWithPartialRelations> = ProductOptionalDefaultsSchema.merge(z.object({
  unit: z.lazy(() => UnitPartialWithRelationsSchema),
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  cakeCounts: z.lazy(() => CakeCountPartialWithRelationsSchema).array(),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

export type ProductWithPartialRelations = z.infer<typeof ProductSchema> & ProductPartialRelations

export const ProductWithPartialRelationsSchema: z.ZodType<ProductWithPartialRelations> = ProductSchema.merge(z.object({
  unit: z.lazy(() => UnitPartialWithRelationsSchema),
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  cakeCounts: z.lazy(() => CakeCountPartialWithRelationsSchema).array(),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// UNIT SCHEMA
/////////////////////////////////////////

export const UnitSchema = z.object({
  id: z.string().cuid(),
  name_th: z.string(),
  name_en: z.string(),
})

export type Unit = z.infer<typeof UnitSchema>

/////////////////////////////////////////
// UNIT PARTIAL SCHEMA
/////////////////////////////////////////

export const UnitPartialSchema = UnitSchema.partial()

export type UnitPartial = z.infer<typeof UnitPartialSchema>

// UNIT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const UnitOptionalDefaultsSchema = UnitSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type UnitOptionalDefaults = z.infer<typeof UnitOptionalDefaultsSchema>

// UNIT RELATION SCHEMA
//------------------------------------------------------

export type UnitRelations = {
  products: ProductWithRelations[];
};

export type UnitWithRelations = z.infer<typeof UnitSchema> & UnitRelations

export const UnitWithRelationsSchema: z.ZodType<UnitWithRelations> = UnitSchema.merge(z.object({
  products: z.lazy(() => ProductWithRelationsSchema).array(),
}))

// UNIT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type UnitOptionalDefaultsRelations = {
  products: ProductOptionalDefaultsWithRelations[];
};

export type UnitOptionalDefaultsWithRelations = z.infer<typeof UnitOptionalDefaultsSchema> & UnitOptionalDefaultsRelations

export const UnitOptionalDefaultsWithRelationsSchema: z.ZodType<UnitOptionalDefaultsWithRelations> = UnitOptionalDefaultsSchema.merge(z.object({
  products: z.lazy(() => ProductOptionalDefaultsWithRelationsSchema).array(),
}))

// UNIT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type UnitPartialRelations = {
  products?: ProductPartialWithRelations[];
};

export type UnitPartialWithRelations = z.infer<typeof UnitPartialSchema> & UnitPartialRelations

export const UnitPartialWithRelationsSchema: z.ZodType<UnitPartialWithRelations> = UnitPartialSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
})).partial()

export type UnitOptionalDefaultsWithPartialRelations = z.infer<typeof UnitOptionalDefaultsSchema> & UnitPartialRelations

export const UnitOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UnitOptionalDefaultsWithPartialRelations> = UnitOptionalDefaultsSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
}).partial())

export type UnitWithPartialRelations = z.infer<typeof UnitSchema> & UnitPartialRelations

export const UnitWithPartialRelationsSchema: z.ZodType<UnitWithPartialRelations> = UnitSchema.merge(z.object({
  products: z.lazy(() => ProductPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  id: z.string().cuid(),
  customerName: z.string(),
  room_id: z.string().nullish(),
  team_id: z.string().nullish(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// ORDER PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderPartialSchema = OrderSchema.partial()

export type OrderPartial = z.infer<typeof OrderPartialSchema>

// ORDER OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const OrderOptionalDefaultsSchema = OrderSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderOptionalDefaults = z.infer<typeof OrderOptionalDefaultsSchema>

// ORDER RELATION SCHEMA
//------------------------------------------------------

export type OrderRelations = {
  orderItems: OrderItemWithRelations[];
  team?: TeamWithRelations | null;
  room?: RoomWithRelations | null;
};

export type OrderWithRelations = z.infer<typeof OrderSchema> & OrderRelations

export const OrderWithRelationsSchema: z.ZodType<OrderWithRelations> = OrderSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemWithRelationsSchema).array(),
  team: z.lazy(() => TeamWithRelationsSchema).nullish(),
  room: z.lazy(() => RoomWithRelationsSchema).nullish(),
}))

// ORDER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type OrderOptionalDefaultsRelations = {
  orderItems: OrderItemOptionalDefaultsWithRelations[];
  team?: TeamOptionalDefaultsWithRelations | null;
  room?: RoomOptionalDefaultsWithRelations | null;
};

export type OrderOptionalDefaultsWithRelations = z.infer<typeof OrderOptionalDefaultsSchema> & OrderOptionalDefaultsRelations

export const OrderOptionalDefaultsWithRelationsSchema: z.ZodType<OrderOptionalDefaultsWithRelations> = OrderOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemOptionalDefaultsWithRelationsSchema).array(),
  team: z.lazy(() => TeamOptionalDefaultsWithRelationsSchema).nullish(),
  room: z.lazy(() => RoomOptionalDefaultsWithRelationsSchema).nullish(),
}))

// ORDER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type OrderPartialRelations = {
  orderItems?: OrderItemPartialWithRelations[];
  team?: TeamPartialWithRelations | null;
  room?: RoomPartialWithRelations | null;
};

export type OrderPartialWithRelations = z.infer<typeof OrderPartialSchema> & OrderPartialRelations

export const OrderPartialWithRelationsSchema: z.ZodType<OrderPartialWithRelations> = OrderPartialSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  room: z.lazy(() => RoomPartialWithRelationsSchema).nullish(),
})).partial()

export type OrderOptionalDefaultsWithPartialRelations = z.infer<typeof OrderOptionalDefaultsSchema> & OrderPartialRelations

export const OrderOptionalDefaultsWithPartialRelationsSchema: z.ZodType<OrderOptionalDefaultsWithPartialRelations> = OrderOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  room: z.lazy(() => RoomPartialWithRelationsSchema).nullish(),
}).partial())

export type OrderWithPartialRelations = z.infer<typeof OrderSchema> & OrderPartialRelations

export const OrderWithPartialRelationsSchema: z.ZodType<OrderWithPartialRelations> = OrderSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  room: z.lazy(() => RoomPartialWithRelationsSchema).nullish(),
}).partial())

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  id: z.string().cuid(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

/////////////////////////////////////////
// ORDER ITEM PARTIAL SCHEMA
/////////////////////////////////////////

export const OrderItemPartialSchema = OrderItemSchema.partial()

export type OrderItemPartial = z.infer<typeof OrderItemPartialSchema>

// ORDER ITEM OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const OrderItemOptionalDefaultsSchema = OrderItemSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderItemOptionalDefaults = z.infer<typeof OrderItemOptionalDefaultsSchema>

// ORDER ITEM RELATION SCHEMA
//------------------------------------------------------

export type OrderItemRelations = {
  order: OrderWithRelations;
  product: ProductWithRelations;
};

export type OrderItemWithRelations = z.infer<typeof OrderItemSchema> & OrderItemRelations

export const OrderItemWithRelationsSchema: z.ZodType<OrderItemWithRelations> = OrderItemSchema.merge(z.object({
  order: z.lazy(() => OrderWithRelationsSchema),
  product: z.lazy(() => ProductWithRelationsSchema),
}))

// ORDER ITEM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type OrderItemOptionalDefaultsRelations = {
  order: OrderOptionalDefaultsWithRelations;
  product: ProductOptionalDefaultsWithRelations;
};

export type OrderItemOptionalDefaultsWithRelations = z.infer<typeof OrderItemOptionalDefaultsSchema> & OrderItemOptionalDefaultsRelations

export const OrderItemOptionalDefaultsWithRelationsSchema: z.ZodType<OrderItemOptionalDefaultsWithRelations> = OrderItemOptionalDefaultsSchema.merge(z.object({
  order: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema),
  product: z.lazy(() => ProductOptionalDefaultsWithRelationsSchema),
}))

// ORDER ITEM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type OrderItemPartialRelations = {
  order?: OrderPartialWithRelations;
  product?: ProductPartialWithRelations;
};

export type OrderItemPartialWithRelations = z.infer<typeof OrderItemPartialSchema> & OrderItemPartialRelations

export const OrderItemPartialWithRelationsSchema: z.ZodType<OrderItemPartialWithRelations> = OrderItemPartialSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
})).partial()

export type OrderItemOptionalDefaultsWithPartialRelations = z.infer<typeof OrderItemOptionalDefaultsSchema> & OrderItemPartialRelations

export const OrderItemOptionalDefaultsWithPartialRelationsSchema: z.ZodType<OrderItemOptionalDefaultsWithPartialRelations> = OrderItemOptionalDefaultsSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
}).partial())

export type OrderItemWithPartialRelations = z.infer<typeof OrderItemSchema> & OrderItemPartialRelations

export const OrderItemWithPartialRelationsSchema: z.ZodType<OrderItemWithPartialRelations> = OrderItemSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// CAKE COUNT SCHEMA
/////////////////////////////////////////

export const CakeCountSchema = z.object({
  pound: CakePoundSchema,
  id: z.string().cuid(),
  product_id: z.string(),
  quantity: z.number().int(),
})

export type CakeCount = z.infer<typeof CakeCountSchema>

/////////////////////////////////////////
// CAKE COUNT PARTIAL SCHEMA
/////////////////////////////////////////

export const CakeCountPartialSchema = CakeCountSchema.partial()

export type CakeCountPartial = z.infer<typeof CakeCountPartialSchema>

// CAKE COUNT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CakeCountOptionalDefaultsSchema = CakeCountSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type CakeCountOptionalDefaults = z.infer<typeof CakeCountOptionalDefaultsSchema>

// CAKE COUNT RELATION SCHEMA
//------------------------------------------------------

export type CakeCountRelations = {
  product: ProductWithRelations;
};

export type CakeCountWithRelations = z.infer<typeof CakeCountSchema> & CakeCountRelations

export const CakeCountWithRelationsSchema: z.ZodType<CakeCountWithRelations> = CakeCountSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema),
}))

// CAKE COUNT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type CakeCountOptionalDefaultsRelations = {
  product: ProductOptionalDefaultsWithRelations;
};

export type CakeCountOptionalDefaultsWithRelations = z.infer<typeof CakeCountOptionalDefaultsSchema> & CakeCountOptionalDefaultsRelations

export const CakeCountOptionalDefaultsWithRelationsSchema: z.ZodType<CakeCountOptionalDefaultsWithRelations> = CakeCountOptionalDefaultsSchema.merge(z.object({
  product: z.lazy(() => ProductOptionalDefaultsWithRelationsSchema),
}))

// CAKE COUNT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CakeCountPartialRelations = {
  product?: ProductPartialWithRelations;
};

export type CakeCountPartialWithRelations = z.infer<typeof CakeCountPartialSchema> & CakeCountPartialRelations

export const CakeCountPartialWithRelationsSchema: z.ZodType<CakeCountPartialWithRelations> = CakeCountPartialSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
})).partial()

export type CakeCountOptionalDefaultsWithPartialRelations = z.infer<typeof CakeCountOptionalDefaultsSchema> & CakeCountPartialRelations

export const CakeCountOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CakeCountOptionalDefaultsWithPartialRelations> = CakeCountOptionalDefaultsSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
}).partial())

export type CakeCountWithPartialRelations = z.infer<typeof CakeCountSchema> & CakeCountPartialRelations

export const CakeCountWithPartialRelationsSchema: z.ZodType<CakeCountWithPartialRelations> = CakeCountSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// CAKE REQUEST SCHEMA
/////////////////////////////////////////

export const CakeRequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().cuid(),
  requestDate: z.coerce.date(),
  note: z.string().nullish(),
  user_id: z.string(),
  branch_id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CakeRequest = z.infer<typeof CakeRequestSchema>

/////////////////////////////////////////
// CAKE REQUEST PARTIAL SCHEMA
/////////////////////////////////////////

export const CakeRequestPartialSchema = CakeRequestSchema.partial()

export type CakeRequestPartial = z.infer<typeof CakeRequestPartialSchema>

// CAKE REQUEST OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CakeRequestOptionalDefaultsSchema = CakeRequestSchema.merge(z.object({
  status: RequestStatusSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CakeRequestOptionalDefaults = z.infer<typeof CakeRequestOptionalDefaultsSchema>

// CAKE REQUEST RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestRelations = {
  branch: BranchWithRelations;
  user: UserWithRelations;
  items: CakeRequestItemsWithRelations[];
};

export type CakeRequestWithRelations = z.infer<typeof CakeRequestSchema> & CakeRequestRelations

export const CakeRequestWithRelationsSchema: z.ZodType<CakeRequestWithRelations> = CakeRequestSchema.merge(z.object({
  branch: z.lazy(() => BranchWithRelationsSchema),
  user: z.lazy(() => UserWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsWithRelationsSchema).array(),
}))

// CAKE REQUEST OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestOptionalDefaultsRelations = {
  branch: BranchOptionalDefaultsWithRelations;
  user: UserOptionalDefaultsWithRelations;
  items: CakeRequestItemsOptionalDefaultsWithRelations[];
};

export type CakeRequestOptionalDefaultsWithRelations = z.infer<typeof CakeRequestOptionalDefaultsSchema> & CakeRequestOptionalDefaultsRelations

export const CakeRequestOptionalDefaultsWithRelationsSchema: z.ZodType<CakeRequestOptionalDefaultsWithRelations> = CakeRequestOptionalDefaultsSchema.merge(z.object({
  branch: z.lazy(() => BranchOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsOptionalDefaultsWithRelationsSchema).array(),
}))

// CAKE REQUEST PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestPartialRelations = {
  branch?: BranchPartialWithRelations;
  user?: UserPartialWithRelations;
  items?: CakeRequestItemsPartialWithRelations[];
};

export type CakeRequestPartialWithRelations = z.infer<typeof CakeRequestPartialSchema> & CakeRequestPartialRelations

export const CakeRequestPartialWithRelationsSchema: z.ZodType<CakeRequestPartialWithRelations> = CakeRequestPartialSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
})).partial()

export type CakeRequestOptionalDefaultsWithPartialRelations = z.infer<typeof CakeRequestOptionalDefaultsSchema> & CakeRequestPartialRelations

export const CakeRequestOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CakeRequestOptionalDefaultsWithPartialRelations> = CakeRequestOptionalDefaultsSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

export type CakeRequestWithPartialRelations = z.infer<typeof CakeRequestSchema> & CakeRequestPartialRelations

export const CakeRequestWithPartialRelationsSchema: z.ZodType<CakeRequestWithPartialRelations> = CakeRequestSchema.merge(z.object({
  branch: z.lazy(() => BranchPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// CAKE REQUEST ITEMS SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsSchema = z.object({
  id: z.string().cuid(),
  request_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
})

export type CakeRequestItems = z.infer<typeof CakeRequestItemsSchema>

/////////////////////////////////////////
// CAKE REQUEST ITEMS PARTIAL SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsPartialSchema = CakeRequestItemsSchema.partial()

export type CakeRequestItemsPartial = z.infer<typeof CakeRequestItemsPartialSchema>

// CAKE REQUEST ITEMS OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const CakeRequestItemsOptionalDefaultsSchema = CakeRequestItemsSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type CakeRequestItemsOptionalDefaults = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema>

// CAKE REQUEST ITEMS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsRelations = {
  product: ProductWithRelations;
  request: CakeRequestWithRelations;
};

export type CakeRequestItemsWithRelations = z.infer<typeof CakeRequestItemsSchema> & CakeRequestItemsRelations

export const CakeRequestItemsWithRelationsSchema: z.ZodType<CakeRequestItemsWithRelations> = CakeRequestItemsSchema.merge(z.object({
  product: z.lazy(() => ProductWithRelationsSchema),
  request: z.lazy(() => CakeRequestWithRelationsSchema),
}))

// CAKE REQUEST ITEMS OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsOptionalDefaultsRelations = {
  product: ProductOptionalDefaultsWithRelations;
  request: CakeRequestOptionalDefaultsWithRelations;
};

export type CakeRequestItemsOptionalDefaultsWithRelations = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema> & CakeRequestItemsOptionalDefaultsRelations

export const CakeRequestItemsOptionalDefaultsWithRelationsSchema: z.ZodType<CakeRequestItemsOptionalDefaultsWithRelations> = CakeRequestItemsOptionalDefaultsSchema.merge(z.object({
  product: z.lazy(() => ProductOptionalDefaultsWithRelationsSchema),
  request: z.lazy(() => CakeRequestOptionalDefaultsWithRelationsSchema),
}))

// CAKE REQUEST ITEMS PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsPartialRelations = {
  product?: ProductPartialWithRelations;
  request?: CakeRequestPartialWithRelations;
};

export type CakeRequestItemsPartialWithRelations = z.infer<typeof CakeRequestItemsPartialSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsPartialWithRelationsSchema: z.ZodType<CakeRequestItemsPartialWithRelations> = CakeRequestItemsPartialSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
})).partial()

export type CakeRequestItemsOptionalDefaultsWithPartialRelations = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CakeRequestItemsOptionalDefaultsWithPartialRelations> = CakeRequestItemsOptionalDefaultsSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
}).partial())

export type CakeRequestItemsWithPartialRelations = z.infer<typeof CakeRequestItemsSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsWithPartialRelationsSchema: z.ZodType<CakeRequestItemsWithPartialRelations> = CakeRequestItemsSchema.merge(z.object({
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BRANCH
//------------------------------------------------------

export const BranchIncludeSchema: z.ZodType<Prisma.BranchInclude> = z.object({
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BranchCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BranchArgsSchema: z.ZodType<Prisma.BranchDefaultArgs> = z.object({
  select: z.lazy(() => BranchSelectSchema).optional(),
  include: z.lazy(() => BranchIncludeSchema).optional(),
}).strict();

export const BranchCountOutputTypeArgsSchema: z.ZodType<Prisma.BranchCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BranchCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BranchCountOutputTypeSelectSchema: z.ZodType<Prisma.BranchCountOutputTypeSelect> = z.object({
  rooms: z.boolean().optional(),
  CakeRequest: z.boolean().optional(),
}).strict();

export const BranchSelectSchema: z.ZodType<Prisma.BranchSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  group_number: z.boolean().optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BranchCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ROOM
//------------------------------------------------------

export const RoomIncludeSchema: z.ZodType<Prisma.RoomInclude> = z.object({
  branch: z.union([z.boolean(),z.lazy(() => BranchArgsSchema)]).optional(),
  grade_level: z.union([z.boolean(),z.lazy(() => GradeLevelArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoomArgsSchema: z.ZodType<Prisma.RoomDefaultArgs> = z.object({
  select: z.lazy(() => RoomSelectSchema).optional(),
  include: z.lazy(() => RoomIncludeSchema).optional(),
}).strict();

export const RoomCountOutputTypeArgsSchema: z.ZodType<Prisma.RoomCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoomCountOutputTypeSelectSchema).nullish(),
}).strict();

export const RoomCountOutputTypeSelectSchema: z.ZodType<Prisma.RoomCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
  orders: z.boolean().optional(),
}).strict();

export const RoomSelectSchema: z.ZodType<Prisma.RoomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  branch_id: z.boolean().optional(),
  grade_level_id: z.boolean().optional(),
  branch: z.union([z.boolean(),z.lazy(() => BranchArgsSchema)]).optional(),
  grade_level: z.union([z.boolean(),z.lazy(() => GradeLevelArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoomCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GRADE LEVEL
//------------------------------------------------------

export const GradeLevelIncludeSchema: z.ZodType<Prisma.GradeLevelInclude> = z.object({
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const GradeLevelArgsSchema: z.ZodType<Prisma.GradeLevelDefaultArgs> = z.object({
  select: z.lazy(() => GradeLevelSelectSchema).optional(),
  include: z.lazy(() => GradeLevelIncludeSchema).optional(),
}).strict();

export const GradeLevelCountOutputTypeArgsSchema: z.ZodType<Prisma.GradeLevelCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => GradeLevelCountOutputTypeSelectSchema).nullish(),
}).strict();

export const GradeLevelCountOutputTypeSelectSchema: z.ZodType<Prisma.GradeLevelCountOutputTypeSelect> = z.object({
  rooms: z.boolean().optional(),
}).strict();

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
  rooms: z.union([z.boolean(),z.lazy(() => RoomFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => GradeLevelCountOutputTypeArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  CakeRequest: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  fname: z.boolean().optional(),
  lastname: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
  email: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TEAM
//------------------------------------------------------

export const TeamIncludeSchema: z.ZodType<Prisma.TeamInclude> = z.object({
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeamArgsSchema: z.ZodType<Prisma.TeamDefaultArgs> = z.object({
  select: z.lazy(() => TeamSelectSchema).optional(),
  include: z.lazy(() => TeamIncludeSchema).optional(),
}).strict();

export const TeamCountOutputTypeArgsSchema: z.ZodType<Prisma.TeamCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeamCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TeamCountOutputTypeSelectSchema: z.ZodType<Prisma.TeamCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export const TeamSelectSchema: z.ZodType<Prisma.TeamSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  room_id: z.boolean().optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  unit: z.union([z.boolean(),z.lazy(() => UnitArgsSchema)]).optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  cakeCounts: z.union([z.boolean(),z.lazy(() => CakeCountFindManyArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductDefaultArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  orderItems: z.boolean().optional(),
  cakeCounts: z.boolean().optional(),
  items: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  unit_id: z.boolean().optional(),
  unit: z.union([z.boolean(),z.lazy(() => UnitArgsSchema)]).optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  cakeCounts: z.union([z.boolean(),z.lazy(() => CakeCountFindManyArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// UNIT
//------------------------------------------------------

export const UnitIncludeSchema: z.ZodType<Prisma.UnitInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UnitCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UnitArgsSchema: z.ZodType<Prisma.UnitDefaultArgs> = z.object({
  select: z.lazy(() => UnitSelectSchema).optional(),
  include: z.lazy(() => UnitIncludeSchema).optional(),
}).strict();

export const UnitCountOutputTypeArgsSchema: z.ZodType<Prisma.UnitCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UnitCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UnitCountOutputTypeSelectSchema: z.ZodType<Prisma.UnitCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const UnitSelectSchema: z.ZodType<Prisma.UnitSelect> = z.object({
  id: z.boolean().optional(),
  name_th: z.boolean().optional(),
  name_en: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UnitCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER
//------------------------------------------------------

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderArgsSchema: z.ZodType<Prisma.OrderDefaultArgs> = z.object({
  select: z.lazy(() => OrderSelectSchema).optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
}).strict();

export const OrderCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrderCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderCountOutputTypeSelect> = z.object({
  orderItems: z.boolean().optional(),
}).strict();

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  id: z.boolean().optional(),
  customerName: z.boolean().optional(),
  room_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  orderDate: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  book_number: z.boolean().optional(),
  number: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  room: z.union([z.boolean(),z.lazy(() => RoomArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER ITEM
//------------------------------------------------------

export const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude> = z.object({
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemDefaultArgs> = z.object({
  select: z.lazy(() => OrderItemSelectSchema).optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
}).strict();

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

// CAKE COUNT
//------------------------------------------------------

export const CakeCountIncludeSchema: z.ZodType<Prisma.CakeCountInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const CakeCountArgsSchema: z.ZodType<Prisma.CakeCountDefaultArgs> = z.object({
  select: z.lazy(() => CakeCountSelectSchema).optional(),
  include: z.lazy(() => CakeCountIncludeSchema).optional(),
}).strict();

export const CakeCountSelectSchema: z.ZodType<Prisma.CakeCountSelect> = z.object({
  id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  pound: z.boolean().optional(),
  quantity: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

// CAKE REQUEST
//------------------------------------------------------

export const CakeRequestIncludeSchema: z.ZodType<Prisma.CakeRequestInclude> = z.object({
  branch: z.union([z.boolean(),z.lazy(() => BranchArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CakeRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CakeRequestArgsSchema: z.ZodType<Prisma.CakeRequestDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestSelectSchema).optional(),
  include: z.lazy(() => CakeRequestIncludeSchema).optional(),
}).strict();

export const CakeRequestCountOutputTypeArgsSchema: z.ZodType<Prisma.CakeRequestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CakeRequestCountOutputTypeSelectSchema: z.ZodType<Prisma.CakeRequestCountOutputTypeSelect> = z.object({
  items: z.boolean().optional(),
}).strict();

export const CakeRequestSelectSchema: z.ZodType<Prisma.CakeRequestSelect> = z.object({
  id: z.boolean().optional(),
  requestDate: z.boolean().optional(),
  status: z.boolean().optional(),
  note: z.boolean().optional(),
  user_id: z.boolean().optional(),
  branch_id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  branch: z.union([z.boolean(),z.lazy(() => BranchArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CakeRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CAKE REQUEST ITEMS
//------------------------------------------------------

export const CakeRequestItemsIncludeSchema: z.ZodType<Prisma.CakeRequestItemsInclude> = z.object({
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
}).strict()

export const CakeRequestItemsArgsSchema: z.ZodType<Prisma.CakeRequestItemsDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestItemsSelectSchema).optional(),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
}).strict();

export const CakeRequestItemsSelectSchema: z.ZodType<Prisma.CakeRequestItemsSelect> = z.object({
  id: z.boolean().optional(),
  request_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BranchWhereInputSchema: z.ZodType<Prisma.BranchWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BranchWhereInputSchema),z.lazy(() => BranchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BranchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BranchWhereInputSchema),z.lazy(() => BranchWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict();

export const BranchOrderByWithRelationInputSchema: z.ZodType<Prisma.BranchOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  rooms: z.lazy(() => RoomOrderByRelationAggregateInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BranchWhereUniqueInputSchema: z.ZodType<Prisma.BranchWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => BranchWhereInputSchema),z.lazy(() => BranchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BranchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BranchWhereInputSchema),z.lazy(() => BranchWhereInputSchema).array() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict());

export const BranchOrderByWithAggregationInputSchema: z.ZodType<Prisma.BranchOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BranchCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BranchMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BranchMinOrderByAggregateInputSchema).optional()
}).strict();

export const BranchScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BranchScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BranchScalarWhereWithAggregatesInputSchema),z.lazy(() => BranchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BranchScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BranchScalarWhereWithAggregatesInputSchema),z.lazy(() => BranchScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  group_number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const RoomWhereInputSchema: z.ZodType<Prisma.RoomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch: z.union([ z.lazy(() => BranchScalarRelationFilterSchema),z.lazy(() => BranchWhereInputSchema) ]).optional(),
  grade_level: z.union([ z.lazy(() => GradeLevelNullableScalarRelationFilterSchema),z.lazy(() => GradeLevelWhereInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const RoomOrderByWithRelationInputSchema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => BranchOrderByWithRelationInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelOrderByWithRelationInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const RoomWhereUniqueInputSchema: z.ZodType<Prisma.RoomWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomWhereInputSchema),z.lazy(() => RoomWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch: z.union([ z.lazy(() => BranchScalarRelationFilterSchema),z.lazy(() => BranchWhereInputSchema) ]).optional(),
  grade_level: z.union([ z.lazy(() => GradeLevelNullableScalarRelationFilterSchema),z.lazy(() => GradeLevelWhereInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const RoomOrderByWithAggregationInputSchema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => RoomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RoomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RoomMinOrderByAggregateInputSchema).optional()
}).strict();

export const RoomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereWithAggregatesInputSchema),z.lazy(() => RoomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GradeLevelWhereInputSchema: z.ZodType<Prisma.GradeLevelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional()
}).strict();

export const GradeLevelOrderByWithRelationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  rooms: z.lazy(() => RoomOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GradeLevelWhereUniqueInputSchema: z.ZodType<Prisma.GradeLevelWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  rooms: z.lazy(() => RoomListRelationFilterSchema).optional()
}).strict());

export const GradeLevelOrderByWithAggregationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GradeLevelCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => GradeLevelAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GradeLevelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GradeLevelMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => GradeLevelSumOrderByAggregateInputSchema).optional()
}).strict();

export const GradeLevelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GradeLevelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema),z.lazy(() => GradeLevelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeWithAggregatesFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  fname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    username: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  fname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  fname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => EnumRoleWithAggregatesFilterSchema),z.lazy(() => RoleSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TeamWhereInputSchema: z.ZodType<Prisma.TeamWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room: z.union([ z.lazy(() => RoomScalarRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TeamWhereUniqueInputSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room: z.union([ z.lazy(() => RoomScalarRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unit_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => UnitScalarRelationFilterSchema),z.lazy(() => UnitWhereInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountListRelationFilterSchema).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit_id: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => UnitOrderByWithRelationInputSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountOrderByRelationAggregateInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unit_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unit: z.union([ z.lazy(() => UnitScalarRelationFilterSchema),z.lazy(() => UnitWhereInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountListRelationFilterSchema).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  unit_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UnitWhereInputSchema: z.ZodType<Prisma.UnitWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UnitWhereInputSchema),z.lazy(() => UnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnitWhereInputSchema),z.lazy(() => UnitWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_th: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_en: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const UnitOrderByWithRelationInputSchema: z.ZodType<Prisma.UnitOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name_th: z.lazy(() => SortOrderSchema).optional(),
  name_en: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UnitWhereUniqueInputSchema: z.ZodType<Prisma.UnitWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => UnitWhereInputSchema),z.lazy(() => UnitWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnitWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnitWhereInputSchema),z.lazy(() => UnitWhereInputSchema).array() ]).optional(),
  name_th: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name_en: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict());

export const UnitOrderByWithAggregationInputSchema: z.ZodType<Prisma.UnitOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name_th: z.lazy(() => SortOrderSchema).optional(),
  name_en: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UnitCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UnitMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UnitMinOrderByAggregateInputSchema).optional()
}).strict();

export const UnitScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UnitScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UnitScalarWhereWithAggregatesInputSchema),z.lazy(() => UnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UnitScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UnitScalarWhereWithAggregatesInputSchema),z.lazy(() => UnitScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name_th: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name_en: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  team: z.union([ z.lazy(() => TeamNullableScalarRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  room: z.union([ z.lazy(() => RoomNullableScalarRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional().nullable(),
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  room: z.lazy(() => RoomOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  team: z.union([ z.lazy(() => TeamNullableScalarRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  room: z.union([ z.lazy(() => RoomNullableScalarRelationFilterSchema),z.lazy(() => RoomWhereInputSchema) ]).optional().nullable(),
}).strict());

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order: z.union([ z.lazy(() => OrderScalarRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderItemWhereUniqueInputSchema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order: z.union([ z.lazy(() => OrderScalarRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict());

export const OrderItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderItemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderItemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderItemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderItemSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrderItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderItemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderItemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CakeCountWhereInputSchema: z.ZodType<Prisma.CakeCountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeCountWhereInputSchema),z.lazy(() => CakeCountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeCountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeCountWhereInputSchema),z.lazy(() => CakeCountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => EnumCakePoundFilterSchema),z.lazy(() => CakePoundSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const CakeCountOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeCountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const CakeCountWhereUniqueInputSchema: z.ZodType<Prisma.CakeCountWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CakeCountWhereInputSchema),z.lazy(() => CakeCountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeCountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeCountWhereInputSchema),z.lazy(() => CakeCountWhereInputSchema).array() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => EnumCakePoundFilterSchema),z.lazy(() => CakePoundSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict());

export const CakeCountOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeCountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeCountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CakeCountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeCountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeCountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CakeCountSumOrderByAggregateInputSchema).optional()
}).strict();

export const CakeCountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeCountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeCountScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeCountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeCountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeCountScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeCountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => EnumCakePoundWithAggregatesFilterSchema),z.lazy(() => CakePoundSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const CakeRequestWhereInputSchema: z.ZodType<Prisma.CakeRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  branch: z.union([ z.lazy(() => BranchScalarRelationFilterSchema),z.lazy(() => BranchWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export const CakeRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  branch: z.lazy(() => BranchOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CakeRequestWhereUniqueInputSchema: z.ZodType<Prisma.CakeRequestWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  branch: z.union([ z.lazy(() => BranchScalarRelationFilterSchema),z.lazy(() => BranchWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict());

export const CakeRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeRequestCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestMinOrderByAggregateInputSchema).optional()
}).strict();

export const CakeRequestScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusWithAggregatesFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CakeRequestItemsWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  request: z.union([ z.lazy(() => CakeRequestScalarRelationFilterSchema),z.lazy(() => CakeRequestWhereInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  request: z.lazy(() => CakeRequestOrderByWithRelationInputSchema).optional()
}).strict();

export const CakeRequestItemsWhereUniqueInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  request_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  request: z.union([ z.lazy(() => CakeRequestScalarRelationFilterSchema),z.lazy(() => CakeRequestWhereInputSchema) ]).optional(),
}).strict());

export const CakeRequestItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeRequestItemsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CakeRequestItemsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestItemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CakeRequestItemsSumOrderByAggregateInputSchema).optional()
}).strict();

export const CakeRequestItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const BranchCreateInputSchema: z.ZodType<Prisma.BranchCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutBranchInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchUncheckedCreateInputSchema: z.ZodType<Prisma.BranchUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutBranchInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchUpdateInputSchema: z.ZodType<Prisma.BranchUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutBranchNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const BranchUncheckedUpdateInputSchema: z.ZodType<Prisma.BranchUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutBranchNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const BranchCreateManyInputSchema: z.ZodType<Prisma.BranchCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string()
}).strict();

export const BranchUpdateManyMutationInputSchema: z.ZodType<Prisma.BranchUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BranchUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BranchUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateInputSchema: z.ZodType<Prisma.RoomCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutRoomsInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutRoomsInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateInputSchema: z.ZodType<Prisma.RoomUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUpdateInputSchema: z.ZodType<Prisma.RoomUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutRoomsNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutRoomsNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomCreateManyInputSchema: z.ZodType<Prisma.RoomCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string(),
  grade_level_id: z.string()
}).strict();

export const RoomUpdateManyMutationInputSchema: z.ZodType<Prisma.RoomUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelCreateInputSchema: z.ZodType<Prisma.GradeLevelCreateInput> = z.object({
  id: z.string().cuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export const GradeLevelUncheckedCreateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export const GradeLevelUpdateInputSchema: z.ZodType<Prisma.GradeLevelUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export const GradeLevelUncheckedUpdateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export const GradeLevelCreateManyInputSchema: z.ZodType<Prisma.GradeLevelCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelUpdateManyMutationInputSchema: z.ZodType<Prisma.GradeLevelUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedOneWithoutTeamsInputSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateInputSchema: z.ZodType<Prisma.TeamUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  room_id: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  room_id: z.string()
}).strict();

export const TeamUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit: z.lazy(() => UnitCreateNestedOneWithoutProductsInputSchema),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.lazy(() => UnitUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UnitCreateInputSchema: z.ZodType<Prisma.UnitCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name_th: z.string(),
  name_en: z.string(),
  products: z.lazy(() => ProductCreateNestedManyWithoutUnitInputSchema).optional()
}).strict();

export const UnitUncheckedCreateInputSchema: z.ZodType<Prisma.UnitUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name_th: z.string(),
  name_en: z.string(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutUnitInputSchema).optional()
}).strict();

export const UnitUpdateInputSchema: z.ZodType<Prisma.UnitUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutUnitNestedInputSchema).optional()
}).strict();

export const UnitUncheckedUpdateInputSchema: z.ZodType<Prisma.UnitUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutUnitNestedInputSchema).optional()
}).strict();

export const UnitCreateManyInputSchema: z.ZodType<Prisma.UnitCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name_th: z.string(),
  name_en: z.string()
}).strict();

export const UnitUpdateManyMutationInputSchema: z.ZodType<Prisma.UnitUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UnitUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UnitUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  room: z.lazy(() => RoomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  room_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  room_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export const OrderItemUncheckedCreateInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyInputSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  order_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderItemUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountCreateInputSchema: z.ZodType<Prisma.CakeCountCreateInput> = z.object({
  id: z.string().cuid().optional(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutCakeCountsInputSchema)
}).strict();

export const CakeCountUncheckedCreateInputSchema: z.ZodType<Prisma.CakeCountUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int()
}).strict();

export const CakeCountUpdateInputSchema: z.ZodType<Prisma.CakeCountUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutCakeCountsNestedInputSchema).optional()
}).strict();

export const CakeCountUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeCountUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountCreateManyInputSchema: z.ZodType<Prisma.CakeCountCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int()
}).strict();

export const CakeCountUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeCountUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeCountUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestCreateInputSchema: z.ZodType<Prisma.CakeRequestCreateInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutCakeRequestInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  branch_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUpdateInputSchema: z.ZodType<Prisma.CakeRequestUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestCreateManyInputSchema: z.ZodType<Prisma.CakeRequestCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  branch_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  request_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  request_id: z.string(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const RoomListRelationFilterSchema: z.ZodType<Prisma.RoomListRelationFilter> = z.object({
  every: z.lazy(() => RoomWhereInputSchema).optional(),
  some: z.lazy(() => RoomWhereInputSchema).optional(),
  none: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const CakeRequestListRelationFilterSchema: z.ZodType<Prisma.CakeRequestListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export const RoomOrderByRelationAggregateInputSchema: z.ZodType<Prisma.RoomOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BranchCountOrderByAggregateInputSchema: z.ZodType<Prisma.BranchCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BranchMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BranchMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BranchMinOrderByAggregateInputSchema: z.ZodType<Prisma.BranchMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BranchScalarRelationFilterSchema: z.ZodType<Prisma.BranchScalarRelationFilter> = z.object({
  is: z.lazy(() => BranchWhereInputSchema).optional(),
  isNot: z.lazy(() => BranchWhereInputSchema).optional()
}).strict();

export const GradeLevelNullableScalarRelationFilterSchema: z.ZodType<Prisma.GradeLevelNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => GradeLevelWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => GradeLevelWhereInputSchema).optional().nullable()
}).strict();

export const TeamListRelationFilterSchema: z.ZodType<Prisma.TeamListRelationFilter> = z.object({
  every: z.lazy(() => TeamWhereInputSchema).optional(),
  some: z.lazy(() => TeamWhereInputSchema).optional(),
  none: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter> = z.object({
  every: z.lazy(() => OrderWhereInputSchema).optional(),
  some: z.lazy(() => OrderWhereInputSchema).optional(),
  none: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const TeamOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TeamOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoomCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomMinOrderByAggregateInputSchema: z.ZodType<Prisma.RoomMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumGradeLevelTypeFilterSchema: z.ZodType<Prisma.EnumGradeLevelTypeFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => NestedEnumGradeLevelTypeFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const GradeLevelLevelYearCompoundUniqueInputSchema: z.ZodType<Prisma.GradeLevelLevelYearCompoundUniqueInput> = z.object({
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number()
}).strict();

export const GradeLevelCountOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GradeLevelAvgOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelAvgOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GradeLevelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GradeLevelMinOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GradeLevelSumOrderByAggregateInputSchema: z.ZodType<Prisma.GradeLevelSumOrderByAggregateInput> = z.object({
  year: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumGradeLevelTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGradeLevelTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => NestedEnumGradeLevelTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumRoleFilterSchema: z.ZodType<Prisma.EnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fname: z.lazy(() => SortOrderSchema).optional(),
  lastname: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const RoomScalarRelationFilterSchema: z.ZodType<Prisma.RoomScalarRelationFilter> = z.object({
  is: z.lazy(() => RoomWhereInputSchema).optional(),
  isNot: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const TeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const UnitScalarRelationFilterSchema: z.ZodType<Prisma.UnitScalarRelationFilter> = z.object({
  is: z.lazy(() => UnitWhereInputSchema).optional(),
  isNot: z.lazy(() => UnitWhereInputSchema).optional()
}).strict();

export const OrderItemListRelationFilterSchema: z.ZodType<Prisma.OrderItemListRelationFilter> = z.object({
  every: z.lazy(() => OrderItemWhereInputSchema).optional(),
  some: z.lazy(() => OrderItemWhereInputSchema).optional(),
  none: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export const CakeCountListRelationFilterSchema: z.ZodType<Prisma.CakeCountListRelationFilter> = z.object({
  every: z.lazy(() => CakeCountWhereInputSchema).optional(),
  some: z.lazy(() => CakeCountWhereInputSchema).optional(),
  none: z.lazy(() => CakeCountWhereInputSchema).optional()
}).strict();

export const CakeRequestItemsListRelationFilterSchema: z.ZodType<Prisma.CakeRequestItemsListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestItemsWhereInputSchema).optional()
}).strict();

export const OrderItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeCountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeCountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  unit_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnitCountOrderByAggregateInputSchema: z.ZodType<Prisma.UnitCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name_th: z.lazy(() => SortOrderSchema).optional(),
  name_en: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnitMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UnitMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name_th: z.lazy(() => SortOrderSchema).optional(),
  name_en: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UnitMinOrderByAggregateInputSchema: z.ZodType<Prisma.UnitMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name_th: z.lazy(() => SortOrderSchema).optional(),
  name_en: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamNullableScalarRelationFilterSchema: z.ZodType<Prisma.TeamNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => TeamWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeamWhereInputSchema).optional().nullable()
}).strict();

export const RoomNullableScalarRelationFilterSchema: z.ZodType<Prisma.RoomNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => RoomWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => RoomWhereInputSchema).optional().nullable()
}).strict();

export const OrderBook_numberNumberCompoundUniqueInputSchema: z.ZodType<Prisma.OrderBook_numberNumberCompoundUniqueInput> = z.object({
  book_number: z.number(),
  number: z.number()
}).strict();

export const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput> = z.object({
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  room_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput> = z.object({
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderScalarRelationFilterSchema: z.ZodType<Prisma.OrderScalarRelationFilter> = z.object({
  is: z.lazy(() => OrderWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const OrderItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumCakePoundFilterSchema: z.ZodType<Prisma.EnumCakePoundFilter> = z.object({
  equals: z.lazy(() => CakePoundSchema).optional(),
  in: z.lazy(() => CakePoundSchema).array().optional(),
  notIn: z.lazy(() => CakePoundSchema).array().optional(),
  not: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => NestedEnumCakePoundFilterSchema) ]).optional(),
}).strict();

export const CakeCountCountOrderByAggregateInputSchema: z.ZodType<Prisma.CakeCountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeCountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CakeCountAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeCountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CakeCountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeCountMinOrderByAggregateInputSchema: z.ZodType<Prisma.CakeCountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeCountSumOrderByAggregateInputSchema: z.ZodType<Prisma.CakeCountSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumCakePoundWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCakePoundWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CakePoundSchema).optional(),
  in: z.lazy(() => CakePoundSchema).array().optional(),
  notIn: z.lazy(() => CakePoundSchema).array().optional(),
  not: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => NestedEnumCakePoundWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCakePoundFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCakePoundFilterSchema).optional()
}).strict();

export const EnumRequestStatusFilterSchema: z.ZodType<Prisma.EnumRequestStatusFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusFilterSchema) ]).optional(),
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const CakeRequestCountOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  branch_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional()
}).strict();

export const CakeRequestScalarRelationFilterSchema: z.ZodType<Prisma.CakeRequestScalarRelationFilter> = z.object({
  is: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  isNot: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export const CakeRequestItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const RoomCreateNestedManyWithoutBranchInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutBranchInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomCreateWithoutBranchInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema),z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyBranchInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestCreateNestedManyWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedManyWithoutBranchInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateWithoutBranchInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyBranchInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedCreateNestedManyWithoutBranchInputSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutBranchInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomCreateWithoutBranchInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema),z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyBranchInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedCreateNestedManyWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateNestedManyWithoutBranchInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateWithoutBranchInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyBranchInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const RoomUpdateManyWithoutBranchNestedInputSchema: z.ZodType<Prisma.RoomUpdateManyWithoutBranchNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomCreateWithoutBranchInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema),z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyBranchInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutBranchInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutBranchInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUpdateManyWithoutBranchNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithoutBranchNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateWithoutBranchInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyBranchInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutBranchInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutBranchInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyWithoutBranchNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutBranchNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomCreateWithoutBranchInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema),z.lazy(() => RoomCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyBranchInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutBranchInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutBranchInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutBranchNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutBranchNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateWithoutBranchInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutBranchInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyBranchInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutBranchInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutBranchInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutBranchInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutBranchInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BranchCreateNestedOneWithoutRoomsInputSchema: z.ZodType<Prisma.BranchCreateNestedOneWithoutRoomsInput> = z.object({
  create: z.union([ z.lazy(() => BranchCreateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BranchCreateOrConnectWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => BranchWhereUniqueInputSchema).optional()
}).strict();

export const GradeLevelCreateNestedOneWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelCreateNestedOneWithoutRoomsInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamCreateWithoutRoomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderCreateWithoutRoomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamCreateWithoutRoomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutRoomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutRoomInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderCreateWithoutRoomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyRoomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BranchUpdateOneRequiredWithoutRoomsNestedInputSchema: z.ZodType<Prisma.BranchUpdateOneRequiredWithoutRoomsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BranchCreateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BranchCreateOrConnectWithoutRoomsInputSchema).optional(),
  upsert: z.lazy(() => BranchUpsertWithoutRoomsInputSchema).optional(),
  connect: z.lazy(() => BranchWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BranchUpdateToOneWithWhereWithoutRoomsInputSchema),z.lazy(() => BranchUpdateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutRoomsInputSchema) ]).optional(),
}).strict();

export const GradeLevelUpdateOneWithoutRoomsNestedInputSchema: z.ZodType<Prisma.GradeLevelUpdateOneWithoutRoomsNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutRoomsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutRoomsInputSchema).optional(),
  upsert: z.lazy(() => GradeLevelUpsertWithoutRoomsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GradeLevelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GradeLevelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeLevelUpdateToOneWithWhereWithoutRoomsInputSchema),z.lazy(() => GradeLevelUpdateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutRoomsInputSchema) ]).optional(),
}).strict();

export const TeamUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamCreateWithoutRoomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderCreateWithoutRoomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamCreateWithoutRoomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutRoomNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutRoomNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderCreateWithoutRoomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutRoomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyRoomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutRoomInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutRoomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutRoomInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutRoomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomCreateNestedManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomCreateNestedManyWithoutGrade_levelInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedCreateNestedManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutGrade_levelInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumGradeLevelTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGradeLevelTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GradeLevelTypeSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const RoomUpdateManyWithoutGrade_levelNestedInputSchema: z.ZodType<Prisma.RoomUpdateManyWithoutGrade_levelNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutGrade_levelInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutGrade_levelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutGrade_levelNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => RoomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoomUpsertWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => RoomUpsertWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoomWhereUniqueInputSchema),z.lazy(() => RoomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoomUpdateWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => RoomUpdateWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoomUpdateManyWithWhereWithoutGrade_levelInputSchema),z.lazy(() => RoomUpdateManyWithWhereWithoutGrade_levelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const EnumRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RoleSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const CakeRequestUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestCreateWithoutUserInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const RoomCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export const OrderCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const RoomUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateToOneWithWhereWithoutTeamsInputSchema),z.lazy(() => RoomUpdateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
}).strict();

export const OrderUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderCreateWithoutTeamInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema),z.lazy(() => OrderCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UnitCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.UnitCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => UnitCreateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnitCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => UnitWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeCountCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CakeCountCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountCreateWithoutProductInputSchema).array(),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeCountCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeCountUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountCreateWithoutProductInputSchema).array(),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeCountCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UnitUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.UnitUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UnitCreateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UnitCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => UnitUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => UnitWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UnitUpdateToOneWithWhereWithoutProductsInputSchema),z.lazy(() => UnitUpdateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeCountUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeCountUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountCreateWithoutProductInputSchema).array(),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeCountUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeCountUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeCountCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeCountUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeCountUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeCountUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => CakeCountUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeCountScalarWhereInputSchema),z.lazy(() => CakeCountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeCountUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeCountUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountCreateWithoutProductInputSchema).array(),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeCountCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeCountUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeCountUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeCountCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeCountWhereUniqueInputSchema),z.lazy(() => CakeCountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeCountUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeCountUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeCountUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => CakeCountUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeCountScalarWhereInputSchema),z.lazy(() => CakeCountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutUnitInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutUnitInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductCreateWithoutUnitInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema),z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyUnitInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutUnitInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutUnitInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductCreateWithoutUnitInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema),z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyUnitInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutUnitNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutUnitNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductCreateWithoutUnitInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema),z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutUnitInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutUnitInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyUnitInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutUnitInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutUnitInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutUnitInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutUnitInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutUnitNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutUnitNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductCreateWithoutUnitInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema),z.lazy(() => ProductCreateOrConnectWithoutUnitInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutUnitInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutUnitInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyUnitInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutUnitInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutUnitInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutUnitInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutUnitInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderItemCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional()
}).strict();

export const RoomCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.RoomCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithoutOrderNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.TeamUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeamCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => TeamUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeamWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeamWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeamUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const RoomUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.RoomUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoomCreateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RoomCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => RoomUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RoomWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RoomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RoomUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => RoomUpdateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema),z.lazy(() => OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema),z.lazy(() => OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema),z.lazy(() => OrderItemUpdateManyWithWhereWithoutOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateNestedOneWithoutOrderItemsInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedOneWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrderItemsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.OrderUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  upsert: z.lazy(() => OrderUpsertWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => OrderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema),z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutOrderItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutOrderItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutOrderItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema),z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema) ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCakeCountsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCakeCountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCakeCountsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const EnumCakePoundFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCakePoundFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => CakePoundSchema).optional()
}).strict();

export const ProductUpdateOneRequiredWithoutCakeCountsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutCakeCountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCakeCountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCakeCountsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutCakeCountsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutCakeCountsInputSchema),z.lazy(() => ProductUpdateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCakeCountsInputSchema) ]).optional(),
}).strict();

export const BranchCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchCreateNestedOneWithoutCakeRequestInput> = z.object({
  create: z.union([ z.lazy(() => BranchCreateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BranchCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => BranchWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCakeRequestInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CakeRequestItemsCreateNestedManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateNestedManyWithoutRequestInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumRequestStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumRequestStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => RequestStatusSchema).optional()
}).strict();

export const BranchUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.BranchUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => BranchCreateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BranchCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  upsert: z.lazy(() => BranchUpsertWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => BranchWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BranchUpdateToOneWithWhereWithoutCakeRequestInputSchema),z.lazy(() => BranchUpdateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutCakeRequestInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCakeRequestInputSchema),z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithoutRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const CakeRequestCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional()
}).strict();

export const ProductUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => CakeRequestUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGradeLevelTypeFilterSchema: z.ZodType<Prisma.NestedEnumGradeLevelTypeFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => NestedEnumGradeLevelTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGradeLevelTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGradeLevelTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GradeLevelTypeSchema).optional(),
  in: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  notIn: z.lazy(() => GradeLevelTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => NestedEnumGradeLevelTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGradeLevelTypeFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoleFilterSchema: z.ZodType<Prisma.NestedEnumRoleFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RoleSchema).optional(),
  in: z.lazy(() => RoleSchema).array().optional(),
  notIn: z.lazy(() => RoleSchema).array().optional(),
  not: z.union([ z.lazy(() => RoleSchema),z.lazy(() => NestedEnumRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRoleFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedEnumCakePoundFilterSchema: z.ZodType<Prisma.NestedEnumCakePoundFilter> = z.object({
  equals: z.lazy(() => CakePoundSchema).optional(),
  in: z.lazy(() => CakePoundSchema).array().optional(),
  notIn: z.lazy(() => CakePoundSchema).array().optional(),
  not: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => NestedEnumCakePoundFilterSchema) ]).optional(),
}).strict();

export const NestedEnumCakePoundWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCakePoundWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CakePoundSchema).optional(),
  in: z.lazy(() => CakePoundSchema).array().optional(),
  notIn: z.lazy(() => CakePoundSchema).array().optional(),
  not: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => NestedEnumCakePoundWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCakePoundFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCakePoundFilterSchema).optional()
}).strict();

export const NestedEnumRequestStatusFilterSchema: z.ZodType<Prisma.NestedEnumRequestStatusFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusFilterSchema) ]).optional(),
}).strict();

export const NestedEnumRequestStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRequestStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RequestStatusSchema).optional(),
  in: z.lazy(() => RequestStatusSchema).array().optional(),
  notIn: z.lazy(() => RequestStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => NestedEnumRequestStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRequestStatusFilterSchema).optional()
}).strict();

export const RoomCreateWithoutBranchInputSchema: z.ZodType<Prisma.RoomCreateWithoutBranchInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutRoomsInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutBranchInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutBranchInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutBranchInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutBranchInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema) ]),
}).strict();

export const RoomCreateManyBranchInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyBranchInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoomCreateManyBranchInputSchema),z.lazy(() => RoomCreateManyBranchInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CakeRequestCreateWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutBranchInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutBranchInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestCreateOrConnectWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutBranchInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema) ]),
}).strict();

export const CakeRequestCreateManyBranchInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestCreateManyBranchInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestCreateManyBranchInputSchema),z.lazy(() => CakeRequestCreateManyBranchInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomUpsertWithWhereUniqueWithoutBranchInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutBranchInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBranchInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedCreateWithoutBranchInputSchema) ]),
}).strict();

export const RoomUpdateWithWhereUniqueWithoutBranchInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutBranchInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutBranchInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutBranchInputSchema) ]),
}).strict();

export const RoomUpdateManyWithWhereWithoutBranchInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutBranchInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutBranchInputSchema) ]),
}).strict();

export const RoomScalarWhereInputSchema: z.ZodType<Prisma.RoomScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoomScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoomScalarWhereInputSchema),z.lazy(() => RoomScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CakeRequestUpsertWithWhereUniqueWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutBranchInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutBranchInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutBranchInputSchema) ]),
}).strict();

export const CakeRequestUpdateWithWhereUniqueWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutBranchInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutBranchInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutBranchInputSchema) ]),
}).strict();

export const CakeRequestUpdateManyWithWhereWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutBranchInput> = z.object({
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateManyMutationInputSchema),z.lazy(() => CakeRequestUncheckedUpdateManyWithoutBranchInputSchema) ]),
}).strict();

export const CakeRequestScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  branch_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BranchCreateWithoutRoomsInputSchema: z.ZodType<Prisma.BranchCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchUncheckedCreateWithoutRoomsInputSchema: z.ZodType<Prisma.BranchUncheckedCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchCreateOrConnectWithoutRoomsInputSchema: z.ZodType<Prisma.BranchCreateOrConnectWithoutRoomsInput> = z.object({
  where: z.lazy(() => BranchWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BranchCreateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedCreateWithoutRoomsInputSchema) ]),
}).strict();

export const GradeLevelCreateWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelUncheckedCreateWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateWithoutRoomsInput> = z.object({
  id: z.string().cuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelCreateOrConnectWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelCreateOrConnectWithoutRoomsInput> = z.object({
  where: z.lazy(() => GradeLevelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutRoomsInputSchema) ]),
}).strict();

export const TeamCreateWithoutRoomInputSchema: z.ZodType<Prisma.TeamCreateWithoutRoomInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutRoomInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const TeamCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyRoomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamCreateManyRoomInputSchema),z.lazy(() => TeamCreateManyRoomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OrderCreateWithoutRoomInputSchema: z.ZodType<Prisma.OrderCreateWithoutRoomInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutRoomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutRoomInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export const OrderCreateOrConnectWithoutRoomInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutRoomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const OrderCreateManyRoomInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyRoomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyRoomInputSchema),z.lazy(() => OrderCreateManyRoomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BranchUpsertWithoutRoomsInputSchema: z.ZodType<Prisma.BranchUpsertWithoutRoomsInput> = z.object({
  update: z.union([ z.lazy(() => BranchUpdateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutRoomsInputSchema) ]),
  create: z.union([ z.lazy(() => BranchCreateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedCreateWithoutRoomsInputSchema) ]),
  where: z.lazy(() => BranchWhereInputSchema).optional()
}).strict();

export const BranchUpdateToOneWithWhereWithoutRoomsInputSchema: z.ZodType<Prisma.BranchUpdateToOneWithWhereWithoutRoomsInput> = z.object({
  where: z.lazy(() => BranchWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BranchUpdateWithoutRoomsInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutRoomsInputSchema) ]),
}).strict();

export const BranchUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.BranchUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const BranchUncheckedUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.BranchUncheckedUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const GradeLevelUpsertWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelUpsertWithoutRoomsInput> = z.object({
  update: z.union([ z.lazy(() => GradeLevelUpdateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutRoomsInputSchema) ]),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutRoomsInputSchema) ]),
  where: z.lazy(() => GradeLevelWhereInputSchema).optional()
}).strict();

export const GradeLevelUpdateToOneWithWhereWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelUpdateToOneWithWhereWithoutRoomsInput> = z.object({
  where: z.lazy(() => GradeLevelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeLevelUpdateWithoutRoomsInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutRoomsInputSchema) ]),
}).strict();

export const GradeLevelUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelUncheckedUpdateWithoutRoomsInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateWithoutRoomsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const TeamUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutRoomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export const TeamUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema),z.lazy(() => TeamUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutRoomInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutRoomInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutRoomInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutRoomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutRoomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutRoomInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutRoomInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutRoomInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutRoomInputSchema) ]),
}).strict();

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  room_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const RoomCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomCreateWithoutGrade_levelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutRoomsInputSchema),
  teams: z.lazy(() => TeamCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutGrade_levelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutRoomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export const RoomCreateManyGrade_levelInputEnvelopeSchema: z.ZodType<Prisma.RoomCreateManyGrade_levelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoomCreateManyGrade_levelInputSchema),z.lazy(() => RoomCreateManyGrade_levelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomUpsertWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoomUpdateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export const RoomUpdateWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateWithoutGrade_levelInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
}).strict();

export const RoomUpdateManyWithWhereWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => RoomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoomUpdateManyMutationInputSchema),z.lazy(() => RoomUncheckedUpdateManyWithoutGrade_levelInputSchema) ]),
}).strict();

export const CakeRequestCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  branch_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CakeRequestCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestCreateManyUserInputSchema),z.lazy(() => CakeRequestCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CakeRequestUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const CakeRequestUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutUserInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const CakeRequestUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateManyMutationInputSchema),z.lazy(() => CakeRequestUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const RoomCreateWithoutTeamsInputSchema: z.ZodType<Prisma.RoomCreateWithoutTeamsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutRoomsInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutRoomsInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string(),
  grade_level_id: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const OrderCreateWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateWithoutTeamInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  room: z.lazy(() => RoomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutTeamInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  room_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export const OrderCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const OrderCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyTeamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyTeamInputSchema),z.lazy(() => OrderCreateManyTeamInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const RoomUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.RoomUpsertWithoutTeamsInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const RoomUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => RoomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoomUpdateWithoutTeamsInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const RoomUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.RoomUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutRoomsNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutRoomsNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const OrderUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutTeamInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutTeamInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutTeamInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutTeamInputSchema) ]),
}).strict();

export const UnitCreateWithoutProductsInputSchema: z.ZodType<Prisma.UnitCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name_th: z.string(),
  name_en: z.string()
}).strict();

export const UnitUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.UnitUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().cuid().optional(),
  name_th: z.string(),
  name_en: z.string()
}).strict();

export const UnitCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.UnitCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => UnitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UnitCreateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const OrderItemCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export const OrderItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  order_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const OrderItemCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyProductInputSchema),z.lazy(() => OrderItemCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CakeCountCreateWithoutProductInputSchema: z.ZodType<Prisma.CakeCountCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int()
}).strict();

export const CakeCountUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int()
}).strict();

export const CakeCountCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CakeCountCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => CakeCountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const CakeCountCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.CakeCountCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeCountCreateManyProductInputSchema),z.lazy(() => CakeCountCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CakeRequestItemsCreateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().cuid().optional(),
  request_id: z.string(),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyProductInputSchema),z.lazy(() => CakeRequestItemsCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UnitUpsertWithoutProductsInputSchema: z.ZodType<Prisma.UnitUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => UnitUpdateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => UnitCreateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedCreateWithoutProductsInputSchema) ]),
  where: z.lazy(() => UnitWhereInputSchema).optional()
}).strict();

export const UnitUpdateToOneWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.UnitUpdateToOneWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => UnitWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UnitUpdateWithoutProductsInputSchema),z.lazy(() => UnitUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const UnitUpdateWithoutProductsInputSchema: z.ZodType<Prisma.UnitUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UnitUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.UnitUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_th: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name_en: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const OrderItemUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const OrderItemUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateManyMutationInputSchema),z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const OrderItemScalarWhereInputSchema: z.ZodType<Prisma.OrderItemScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemScalarWhereInputSchema),z.lazy(() => OrderItemScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CakeCountUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeCountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeCountUpdateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => CakeCountCreateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const CakeCountUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeCountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeCountUpdateWithoutProductInputSchema),z.lazy(() => CakeCountUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const CakeCountUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => CakeCountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeCountUpdateManyMutationInputSchema),z.lazy(() => CakeCountUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const CakeCountScalarWhereInputSchema: z.ZodType<Prisma.CakeCountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeCountScalarWhereInputSchema),z.lazy(() => CakeCountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeCountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeCountScalarWhereInputSchema),z.lazy(() => CakeCountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => EnumCakePoundFilterSchema),z.lazy(() => CakePoundSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const CakeRequestItemsUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutProductInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema) ]),
}).strict();

export const CakeRequestItemsScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ProductCreateWithoutUnitInputSchema: z.ZodType<Prisma.ProductCreateWithoutUnitInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutUnitInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutUnitInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutUnitInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutUnitInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema) ]),
}).strict();

export const ProductCreateManyUnitInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyUnitInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyUnitInputSchema),z.lazy(() => ProductCreateManyUnitInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutUnitInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutUnitInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutUnitInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedCreateWithoutUnitInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutUnitInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutUnitInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutUnitInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutUnitInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutUnitInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutUnitInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutUnitInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  unit_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const OrderItemCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export const OrderItemUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemCreateOrConnectWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutOrderInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export const OrderItemCreateManyOrderInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyOrderInputSchema),z.lazy(() => OrderItemCreateManyOrderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeamCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateWithoutOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  room: z.lazy(() => RoomCreateNestedOneWithoutTeamsInputSchema)
}).strict();

export const TeamUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  room_id: z.string()
}).strict();

export const TeamCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const RoomCreateWithoutOrdersInputSchema: z.ZodType<Prisma.RoomCreateWithoutOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutRoomsInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutRoomsInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.RoomUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutRoomInputSchema).optional()
}).strict();

export const RoomCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.RoomCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => RoomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoomCreateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const OrderItemUpsertWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutOrderInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema) ]),
}).strict();

export const OrderItemUpdateWithWhereUniqueWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutOrderInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutOrderInputSchema) ]),
}).strict();

export const OrderItemUpdateManyWithWhereWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutOrderInput> = z.object({
  where: z.lazy(() => OrderItemScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderItemUpdateManyMutationInputSchema),z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderInputSchema) ]),
}).strict();

export const TeamUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => TeamWhereInputSchema).optional()
}).strict();

export const TeamUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => TeamWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeamUpdateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const TeamUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room: z.lazy(() => RoomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.RoomUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => RoomUpdateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => RoomCreateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => RoomWhereInputSchema).optional()
}).strict();

export const RoomUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.RoomUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => RoomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RoomUpdateWithoutOrdersInputSchema),z.lazy(() => RoomUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const RoomUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.RoomUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutRoomsNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutRoomsNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const OrderCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateWithoutOrderItemsInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  room: z.lazy(() => RoomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  room_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]),
}).strict();

export const ProductCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit: z.lazy(() => UnitCreateNestedOneWithoutProductsInputSchema),
  cakeCounts: z.lazy(() => CakeCountCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string(),
  cakeCounts: z.lazy(() => CakeCountUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]),
}).strict();

export const OrderUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpsertWithoutOrderItemsInput> = z.object({
  update: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]),
  where: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const OrderUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpdateToOneWithWhereWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => OrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderUpdateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutOrderItemsInputSchema) ]),
}).strict();

export const OrderUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpsertWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutOrderItemsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutOrderItemsInputSchema) ]),
}).strict();

export const ProductUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.lazy(() => UnitUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductCreateWithoutCakeCountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit: z.lazy(() => UnitCreateNestedOneWithoutProductsInputSchema),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCakeCountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCakeCountsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCakeCountsInputSchema) ]),
}).strict();

export const ProductUpsertWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutCakeCountsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCakeCountsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCakeCountsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutCakeCountsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCakeCountsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCakeCountsInputSchema) ]),
}).strict();

export const ProductUpdateWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCakeCountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.lazy(() => UnitUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCakeCountsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCakeCountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const BranchCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchCreateWithoutCakeRequestInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  rooms: z.lazy(() => RoomCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchUncheckedCreateWithoutCakeRequestInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  group_number: z.string(),
  rooms: z.lazy(() => RoomUncheckedCreateNestedManyWithoutBranchInputSchema).optional()
}).strict();

export const BranchCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchCreateOrConnectWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => BranchWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BranchCreateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedCreateWithoutCakeRequestInputSchema) ]),
}).strict();

export const UserCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateWithoutCakeRequestInput> = z.object({
  id: z.string().cuid().optional(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCakeRequestInput> = z.object({
  id: z.string().cuid().optional(),
  fname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutRequestInput> = z.object({
  id: z.string().cuid().optional(),
  quantity: z.number().int(),
  product: z.lazy(() => ProductCreateNestedOneWithoutItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutRequestInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsCreateOrConnectWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateManyRequestInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema),z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BranchUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchUpsertWithoutCakeRequestInput> = z.object({
  update: z.union([ z.lazy(() => BranchUpdateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutCakeRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BranchCreateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedCreateWithoutCakeRequestInputSchema) ]),
  where: z.lazy(() => BranchWhereInputSchema).optional()
}).strict();

export const BranchUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => BranchWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BranchUpdateWithoutCakeRequestInputSchema),z.lazy(() => BranchUncheckedUpdateWithoutCakeRequestInputSchema) ]),
}).strict();

export const BranchUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const BranchUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.BranchUncheckedUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rooms: z.lazy(() => RoomUncheckedUpdateManyWithoutBranchNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpsertWithoutCakeRequestInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedCreateWithoutCakeRequestInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCakeRequestInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCakeRequestInputSchema) ]),
}).strict();

export const UserUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  fname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateManyWithWhereWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema) ]),
}).strict();

export const ProductCreateWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutItemsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit: z.lazy(() => UnitCreateNestedOneWithoutProductsInputSchema),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutItemsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number(),
  unit_id: z.string(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const CakeRequestCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutItemsInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  branch: z.lazy(() => BranchCreateNestedOneWithoutCakeRequestInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema)
}).strict();

export const CakeRequestUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutItemsInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  branch_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const ProductUpsertWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => ProductWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProductUpdateWithoutItemsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const ProductUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit: z.lazy(() => UnitUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  unit_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const CakeRequestUpsertWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithoutItemsInput> = z.object({
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]),
  where: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export const CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpdateToOneWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const CakeRequestUpdateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateManyBranchInputSchema: z.ZodType<Prisma.RoomCreateManyBranchInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  grade_level_id: z.string()
}).strict();

export const CakeRequestCreateManyBranchInputSchema: z.ZodType<Prisma.CakeRequestCreateManyBranchInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const RoomUpdateWithoutBranchInputSchema: z.ZodType<Prisma.RoomUpdateWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutRoomsNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutBranchInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateManyWithoutBranchInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestUpdateWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutBranchInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutBranchInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamCreateManyRoomInputSchema: z.ZodType<Prisma.TeamCreateManyRoomInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string()
}).strict();

export const OrderCreateManyRoomInputSchema: z.ZodType<Prisma.OrderCreateManyRoomInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TeamUpdateWithoutRoomInputSchema: z.ZodType<Prisma.TeamUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateManyWithoutRoomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUpdateWithoutRoomInputSchema: z.ZodType<Prisma.OrderUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutRoomInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateManyWithoutRoomInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutRoomInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const RoomCreateManyGrade_levelInputSchema: z.ZodType<Prisma.RoomCreateManyGrade_levelInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  branch_id: z.string()
}).strict();

export const RoomUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUpdateWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutRoomsNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutRoomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutRoomNestedInputSchema).optional()
}).strict();

export const RoomUncheckedUpdateManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestCreateManyUserInputSchema: z.ZodType<Prisma.CakeRequestCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  branch_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestUpdateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  branch: z.lazy(() => BranchUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  branch_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyTeamInputSchema: z.ZodType<Prisma.OrderCreateManyTeamInput> = z.object({
  id: z.string().cuid().optional(),
  customerName: z.string(),
  room_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  room: z.lazy(() => RoomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutTeamInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  room_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyProductInputSchema: z.ZodType<Prisma.OrderItemCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  order_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeCountCreateManyProductInputSchema: z.ZodType<Prisma.CakeCountCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  pound: z.lazy(() => CakePoundSchema),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsCreateManyProductInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyProductInput> = z.object({
  id: z.string().cuid().optional(),
  request_id: z.string(),
  quantity: z.number().int()
}).strict();

export const OrderItemUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeCountUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.CakeCountUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.lazy(() => CakePoundSchema),z.lazy(() => EnumCakePoundFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyUnitInputSchema: z.ZodType<Prisma.ProductCreateManyUnitInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export const ProductUpdateWithoutUnitInputSchema: z.ZodType<Prisma.ProductUpdateWithoutUnitInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutUnitInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutUnitInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  cakeCounts: z.lazy(() => CakeCountUncheckedUpdateManyWithoutProductNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutUnitInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutUnitInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateManyRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInput> = z.object({
  id: z.string().cuid().optional(),
  product_id: z.string(),
  quantity: z.number().int()
}).strict();

export const CakeRequestItemsUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BranchFindFirstArgsSchema: z.ZodType<Prisma.BranchFindFirstArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereInputSchema.optional(),
  orderBy: z.union([ BranchOrderByWithRelationInputSchema.array(),BranchOrderByWithRelationInputSchema ]).optional(),
  cursor: BranchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BranchScalarFieldEnumSchema,BranchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BranchFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BranchFindFirstOrThrowArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereInputSchema.optional(),
  orderBy: z.union([ BranchOrderByWithRelationInputSchema.array(),BranchOrderByWithRelationInputSchema ]).optional(),
  cursor: BranchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BranchScalarFieldEnumSchema,BranchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BranchFindManyArgsSchema: z.ZodType<Prisma.BranchFindManyArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereInputSchema.optional(),
  orderBy: z.union([ BranchOrderByWithRelationInputSchema.array(),BranchOrderByWithRelationInputSchema ]).optional(),
  cursor: BranchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BranchScalarFieldEnumSchema,BranchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BranchAggregateArgsSchema: z.ZodType<Prisma.BranchAggregateArgs> = z.object({
  where: BranchWhereInputSchema.optional(),
  orderBy: z.union([ BranchOrderByWithRelationInputSchema.array(),BranchOrderByWithRelationInputSchema ]).optional(),
  cursor: BranchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BranchGroupByArgsSchema: z.ZodType<Prisma.BranchGroupByArgs> = z.object({
  where: BranchWhereInputSchema.optional(),
  orderBy: z.union([ BranchOrderByWithAggregationInputSchema.array(),BranchOrderByWithAggregationInputSchema ]).optional(),
  by: BranchScalarFieldEnumSchema.array(),
  having: BranchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BranchFindUniqueArgsSchema: z.ZodType<Prisma.BranchFindUniqueArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereUniqueInputSchema,
}).strict() ;

export const BranchFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BranchFindUniqueOrThrowArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereUniqueInputSchema,
}).strict() ;

export const RoomFindFirstArgsSchema: z.ZodType<Prisma.RoomFindFirstArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoomFindFirstOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomFindManyArgsSchema: z.ZodType<Prisma.RoomFindManyArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoomScalarFieldEnumSchema,RoomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const RoomAggregateArgsSchema: z.ZodType<Prisma.RoomAggregateArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithRelationInputSchema.array(),RoomOrderByWithRelationInputSchema ]).optional(),
  cursor: RoomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoomGroupByArgsSchema: z.ZodType<Prisma.RoomGroupByArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  orderBy: z.union([ RoomOrderByWithAggregationInputSchema.array(),RoomOrderByWithAggregationInputSchema ]).optional(),
  by: RoomScalarFieldEnumSchema.array(),
  having: RoomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const RoomFindUniqueArgsSchema: z.ZodType<Prisma.RoomFindUniqueArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.RoomFindUniqueOrThrowArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const GradeLevelFindFirstArgsSchema: z.ZodType<Prisma.GradeLevelFindFirstArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GradeLevelScalarFieldEnumSchema,GradeLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GradeLevelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GradeLevelFindFirstOrThrowArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GradeLevelScalarFieldEnumSchema,GradeLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GradeLevelFindManyArgsSchema: z.ZodType<Prisma.GradeLevelFindManyArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GradeLevelScalarFieldEnumSchema,GradeLevelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GradeLevelAggregateArgsSchema: z.ZodType<Prisma.GradeLevelAggregateArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithRelationInputSchema.array(),GradeLevelOrderByWithRelationInputSchema ]).optional(),
  cursor: GradeLevelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GradeLevelGroupByArgsSchema: z.ZodType<Prisma.GradeLevelGroupByArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  orderBy: z.union([ GradeLevelOrderByWithAggregationInputSchema.array(),GradeLevelOrderByWithAggregationInputSchema ]).optional(),
  by: GradeLevelScalarFieldEnumSchema.array(),
  having: GradeLevelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GradeLevelFindUniqueArgsSchema: z.ZodType<Prisma.GradeLevelFindUniqueArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereUniqueInputSchema,
}).strict() ;

export const GradeLevelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GradeLevelFindUniqueOrThrowArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const TeamFindFirstArgsSchema: z.ZodType<Prisma.TeamFindFirstArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeamFindFirstOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamFindManyArgsSchema: z.ZodType<Prisma.TeamFindManyArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeamScalarFieldEnumSchema,TeamScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeamAggregateArgsSchema: z.ZodType<Prisma.TeamAggregateArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithRelationInputSchema.array(),TeamOrderByWithRelationInputSchema ]).optional(),
  cursor: TeamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamGroupByArgsSchema: z.ZodType<Prisma.TeamGroupByArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
  orderBy: z.union([ TeamOrderByWithAggregationInputSchema.array(),TeamOrderByWithAggregationInputSchema ]).optional(),
  by: TeamScalarFieldEnumSchema.array(),
  having: TeamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeamFindUniqueArgsSchema: z.ZodType<Prisma.TeamFindUniqueArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeamFindUniqueOrThrowArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProductScalarFieldEnumSchema,ProductScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const UnitFindFirstArgsSchema: z.ZodType<Prisma.UnitFindFirstArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereInputSchema.optional(),
  orderBy: z.union([ UnitOrderByWithRelationInputSchema.array(),UnitOrderByWithRelationInputSchema ]).optional(),
  cursor: UnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnitScalarFieldEnumSchema,UnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnitFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UnitFindFirstOrThrowArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereInputSchema.optional(),
  orderBy: z.union([ UnitOrderByWithRelationInputSchema.array(),UnitOrderByWithRelationInputSchema ]).optional(),
  cursor: UnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnitScalarFieldEnumSchema,UnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnitFindManyArgsSchema: z.ZodType<Prisma.UnitFindManyArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereInputSchema.optional(),
  orderBy: z.union([ UnitOrderByWithRelationInputSchema.array(),UnitOrderByWithRelationInputSchema ]).optional(),
  cursor: UnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UnitScalarFieldEnumSchema,UnitScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UnitAggregateArgsSchema: z.ZodType<Prisma.UnitAggregateArgs> = z.object({
  where: UnitWhereInputSchema.optional(),
  orderBy: z.union([ UnitOrderByWithRelationInputSchema.array(),UnitOrderByWithRelationInputSchema ]).optional(),
  cursor: UnitWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UnitGroupByArgsSchema: z.ZodType<Prisma.UnitGroupByArgs> = z.object({
  where: UnitWhereInputSchema.optional(),
  orderBy: z.union([ UnitOrderByWithAggregationInputSchema.array(),UnitOrderByWithAggregationInputSchema ]).optional(),
  by: UnitScalarFieldEnumSchema.array(),
  having: UnitScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UnitFindUniqueArgsSchema: z.ZodType<Prisma.UnitFindUniqueArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereUniqueInputSchema,
}).strict() ;

export const UnitFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UnitFindUniqueOrThrowArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereUniqueInputSchema,
}).strict() ;

export const OrderFindFirstArgsSchema: z.ZodType<Prisma.OrderFindFirstArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderScalarFieldEnumSchema,OrderScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithAggregationInputSchema.array(),OrderOrderByWithAggregationInputSchema ]).optional(),
  by: OrderScalarFieldEnumSchema.array(),
  having: OrderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrderFindUniqueArgsSchema: z.ZodType<Prisma.OrderFindUniqueArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict() ;

export const OrderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict() ;

export const OrderItemFindFirstArgsSchema: z.ZodType<Prisma.OrderItemFindFirstArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindFirstOrThrowArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderItemFindManyArgsSchema: z.ZodType<Prisma.OrderItemFindManyArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrderItemScalarFieldEnumSchema,OrderItemScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OrderItemAggregateArgsSchema: z.ZodType<Prisma.OrderItemAggregateArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithRelationInputSchema.array(),OrderItemOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrderItemGroupByArgsSchema: z.ZodType<Prisma.OrderItemGroupByArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
  orderBy: z.union([ OrderItemOrderByWithAggregationInputSchema.array(),OrderItemOrderByWithAggregationInputSchema ]).optional(),
  by: OrderItemScalarFieldEnumSchema.array(),
  having: OrderItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OrderItemFindUniqueArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export const OrderItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderItemFindUniqueOrThrowArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export const CakeCountFindFirstArgsSchema: z.ZodType<Prisma.CakeCountFindFirstArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereInputSchema.optional(),
  orderBy: z.union([ CakeCountOrderByWithRelationInputSchema.array(),CakeCountOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeCountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeCountScalarFieldEnumSchema,CakeCountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeCountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CakeCountFindFirstOrThrowArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereInputSchema.optional(),
  orderBy: z.union([ CakeCountOrderByWithRelationInputSchema.array(),CakeCountOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeCountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeCountScalarFieldEnumSchema,CakeCountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeCountFindManyArgsSchema: z.ZodType<Prisma.CakeCountFindManyArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereInputSchema.optional(),
  orderBy: z.union([ CakeCountOrderByWithRelationInputSchema.array(),CakeCountOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeCountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeCountScalarFieldEnumSchema,CakeCountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeCountAggregateArgsSchema: z.ZodType<Prisma.CakeCountAggregateArgs> = z.object({
  where: CakeCountWhereInputSchema.optional(),
  orderBy: z.union([ CakeCountOrderByWithRelationInputSchema.array(),CakeCountOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeCountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeCountGroupByArgsSchema: z.ZodType<Prisma.CakeCountGroupByArgs> = z.object({
  where: CakeCountWhereInputSchema.optional(),
  orderBy: z.union([ CakeCountOrderByWithAggregationInputSchema.array(),CakeCountOrderByWithAggregationInputSchema ]).optional(),
  by: CakeCountScalarFieldEnumSchema.array(),
  having: CakeCountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeCountFindUniqueArgsSchema: z.ZodType<Prisma.CakeCountFindUniqueArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereUniqueInputSchema,
}).strict() ;

export const CakeCountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CakeCountFindUniqueOrThrowArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestFindFirstArgsSchema: z.ZodType<Prisma.CakeRequestFindFirstArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestScalarFieldEnumSchema,CakeRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestFindFirstOrThrowArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestScalarFieldEnumSchema,CakeRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestFindManyArgsSchema: z.ZodType<Prisma.CakeRequestFindManyArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestScalarFieldEnumSchema,CakeRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestAggregateArgsSchema: z.ZodType<Prisma.CakeRequestAggregateArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithRelationInputSchema.array(),CakeRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeRequestGroupByArgsSchema: z.ZodType<Prisma.CakeRequestGroupByArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestOrderByWithAggregationInputSchema.array(),CakeRequestOrderByWithAggregationInputSchema ]).optional(),
  by: CakeRequestScalarFieldEnumSchema.array(),
  having: CakeRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeRequestFindUniqueArgsSchema: z.ZodType<Prisma.CakeRequestFindUniqueArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestFindUniqueOrThrowArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestItemsFindFirstArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindFirstArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithRelationInputSchema.array(),CakeRequestItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestItemsScalarFieldEnumSchema,CakeRequestItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindFirstOrThrowArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithRelationInputSchema.array(),CakeRequestItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestItemsScalarFieldEnumSchema,CakeRequestItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestItemsFindManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindManyArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithRelationInputSchema.array(),CakeRequestItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CakeRequestItemsScalarFieldEnumSchema,CakeRequestItemsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CakeRequestItemsAggregateArgsSchema: z.ZodType<Prisma.CakeRequestItemsAggregateArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithRelationInputSchema.array(),CakeRequestItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: CakeRequestItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeRequestItemsGroupByArgsSchema: z.ZodType<Prisma.CakeRequestItemsGroupByArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  orderBy: z.union([ CakeRequestItemsOrderByWithAggregationInputSchema.array(),CakeRequestItemsOrderByWithAggregationInputSchema ]).optional(),
  by: CakeRequestItemsScalarFieldEnumSchema.array(),
  having: CakeRequestItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CakeRequestItemsFindUniqueArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindUniqueArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CakeRequestItemsFindUniqueOrThrowArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict() ;

export const BranchCreateArgsSchema: z.ZodType<Prisma.BranchCreateArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  data: z.union([ BranchCreateInputSchema,BranchUncheckedCreateInputSchema ]),
}).strict() ;

export const BranchUpsertArgsSchema: z.ZodType<Prisma.BranchUpsertArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereUniqueInputSchema,
  create: z.union([ BranchCreateInputSchema,BranchUncheckedCreateInputSchema ]),
  update: z.union([ BranchUpdateInputSchema,BranchUncheckedUpdateInputSchema ]),
}).strict() ;

export const BranchCreateManyArgsSchema: z.ZodType<Prisma.BranchCreateManyArgs> = z.object({
  data: z.union([ BranchCreateManyInputSchema,BranchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BranchCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BranchCreateManyAndReturnArgs> = z.object({
  data: z.union([ BranchCreateManyInputSchema,BranchCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BranchDeleteArgsSchema: z.ZodType<Prisma.BranchDeleteArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  where: BranchWhereUniqueInputSchema,
}).strict() ;

export const BranchUpdateArgsSchema: z.ZodType<Prisma.BranchUpdateArgs> = z.object({
  select: BranchSelectSchema.optional(),
  include: BranchIncludeSchema.optional(),
  data: z.union([ BranchUpdateInputSchema,BranchUncheckedUpdateInputSchema ]),
  where: BranchWhereUniqueInputSchema,
}).strict() ;

export const BranchUpdateManyArgsSchema: z.ZodType<Prisma.BranchUpdateManyArgs> = z.object({
  data: z.union([ BranchUpdateManyMutationInputSchema,BranchUncheckedUpdateManyInputSchema ]),
  where: BranchWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BranchUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BranchUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BranchUpdateManyMutationInputSchema,BranchUncheckedUpdateManyInputSchema ]),
  where: BranchWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const BranchDeleteManyArgsSchema: z.ZodType<Prisma.BranchDeleteManyArgs> = z.object({
  where: BranchWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const RoomCreateArgsSchema: z.ZodType<Prisma.RoomCreateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
}).strict() ;

export const RoomUpsertArgsSchema: z.ZodType<Prisma.RoomUpsertArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
  create: z.union([ RoomCreateInputSchema,RoomUncheckedCreateInputSchema ]),
  update: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
}).strict() ;

export const RoomCreateManyArgsSchema: z.ZodType<Prisma.RoomCreateManyArgs> = z.object({
  data: z.union([ RoomCreateManyInputSchema,RoomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const RoomCreateManyAndReturnArgsSchema: z.ZodType<Prisma.RoomCreateManyAndReturnArgs> = z.object({
  data: z.union([ RoomCreateManyInputSchema,RoomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const RoomDeleteArgsSchema: z.ZodType<Prisma.RoomDeleteArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomUpdateArgsSchema: z.ZodType<Prisma.RoomUpdateArgs> = z.object({
  select: RoomSelectSchema.optional(),
  include: RoomIncludeSchema.optional(),
  data: z.union([ RoomUpdateInputSchema,RoomUncheckedUpdateInputSchema ]),
  where: RoomWhereUniqueInputSchema,
}).strict() ;

export const RoomUpdateManyArgsSchema: z.ZodType<Prisma.RoomUpdateManyArgs> = z.object({
  data: z.union([ RoomUpdateManyMutationInputSchema,RoomUncheckedUpdateManyInputSchema ]),
  where: RoomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const RoomUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.RoomUpdateManyAndReturnArgs> = z.object({
  data: z.union([ RoomUpdateManyMutationInputSchema,RoomUncheckedUpdateManyInputSchema ]),
  where: RoomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const RoomDeleteManyArgsSchema: z.ZodType<Prisma.RoomDeleteManyArgs> = z.object({
  where: RoomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GradeLevelCreateArgsSchema: z.ZodType<Prisma.GradeLevelCreateArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  data: z.union([ GradeLevelCreateInputSchema,GradeLevelUncheckedCreateInputSchema ]),
}).strict() ;

export const GradeLevelUpsertArgsSchema: z.ZodType<Prisma.GradeLevelUpsertArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereUniqueInputSchema,
  create: z.union([ GradeLevelCreateInputSchema,GradeLevelUncheckedCreateInputSchema ]),
  update: z.union([ GradeLevelUpdateInputSchema,GradeLevelUncheckedUpdateInputSchema ]),
}).strict() ;

export const GradeLevelCreateManyArgsSchema: z.ZodType<Prisma.GradeLevelCreateManyArgs> = z.object({
  data: z.union([ GradeLevelCreateManyInputSchema,GradeLevelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GradeLevelCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GradeLevelCreateManyAndReturnArgs> = z.object({
  data: z.union([ GradeLevelCreateManyInputSchema,GradeLevelCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const GradeLevelDeleteArgsSchema: z.ZodType<Prisma.GradeLevelDeleteArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  where: GradeLevelWhereUniqueInputSchema,
}).strict() ;

export const GradeLevelUpdateArgsSchema: z.ZodType<Prisma.GradeLevelUpdateArgs> = z.object({
  select: GradeLevelSelectSchema.optional(),
  include: GradeLevelIncludeSchema.optional(),
  data: z.union([ GradeLevelUpdateInputSchema,GradeLevelUncheckedUpdateInputSchema ]),
  where: GradeLevelWhereUniqueInputSchema,
}).strict() ;

export const GradeLevelUpdateManyArgsSchema: z.ZodType<Prisma.GradeLevelUpdateManyArgs> = z.object({
  data: z.union([ GradeLevelUpdateManyMutationInputSchema,GradeLevelUncheckedUpdateManyInputSchema ]),
  where: GradeLevelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GradeLevelUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.GradeLevelUpdateManyAndReturnArgs> = z.object({
  data: z.union([ GradeLevelUpdateManyMutationInputSchema,GradeLevelUncheckedUpdateManyInputSchema ]),
  where: GradeLevelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GradeLevelDeleteManyArgsSchema: z.ZodType<Prisma.GradeLevelDeleteManyArgs> = z.object({
  where: GradeLevelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TeamCreateArgsSchema: z.ZodType<Prisma.TeamCreateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamCreateInputSchema,TeamUncheckedCreateInputSchema ]),
}).strict() ;

export const TeamUpsertArgsSchema: z.ZodType<Prisma.TeamUpsertArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
  create: z.union([ TeamCreateInputSchema,TeamUncheckedCreateInputSchema ]),
  update: z.union([ TeamUpdateInputSchema,TeamUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeamCreateManyArgsSchema: z.ZodType<Prisma.TeamCreateManyArgs> = z.object({
  data: z.union([ TeamCreateManyInputSchema,TeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeamCreateManyInputSchema,TeamCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeamDeleteArgsSchema: z.ZodType<Prisma.TeamDeleteArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamUpdateArgsSchema: z.ZodType<Prisma.TeamUpdateArgs> = z.object({
  select: TeamSelectSchema.optional(),
  include: TeamIncludeSchema.optional(),
  data: z.union([ TeamUpdateInputSchema,TeamUncheckedUpdateInputSchema ]),
  where: TeamWhereUniqueInputSchema,
}).strict() ;

export const TeamUpdateManyArgsSchema: z.ZodType<Prisma.TeamUpdateManyArgs> = z.object({
  data: z.union([ TeamUpdateManyMutationInputSchema,TeamUncheckedUpdateManyInputSchema ]),
  where: TeamWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TeamUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TeamUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TeamUpdateManyMutationInputSchema,TeamUncheckedUpdateManyInputSchema ]),
  where: TeamWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const TeamDeleteManyArgsSchema: z.ZodType<Prisma.TeamDeleteManyArgs> = z.object({
  where: TeamWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict() ;

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict() ;

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProductUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ProductUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UnitCreateArgsSchema: z.ZodType<Prisma.UnitCreateArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  data: z.union([ UnitCreateInputSchema,UnitUncheckedCreateInputSchema ]),
}).strict() ;

export const UnitUpsertArgsSchema: z.ZodType<Prisma.UnitUpsertArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereUniqueInputSchema,
  create: z.union([ UnitCreateInputSchema,UnitUncheckedCreateInputSchema ]),
  update: z.union([ UnitUpdateInputSchema,UnitUncheckedUpdateInputSchema ]),
}).strict() ;

export const UnitCreateManyArgsSchema: z.ZodType<Prisma.UnitCreateManyArgs> = z.object({
  data: z.union([ UnitCreateManyInputSchema,UnitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UnitCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UnitCreateManyAndReturnArgs> = z.object({
  data: z.union([ UnitCreateManyInputSchema,UnitCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UnitDeleteArgsSchema: z.ZodType<Prisma.UnitDeleteArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  where: UnitWhereUniqueInputSchema,
}).strict() ;

export const UnitUpdateArgsSchema: z.ZodType<Prisma.UnitUpdateArgs> = z.object({
  select: UnitSelectSchema.optional(),
  include: UnitIncludeSchema.optional(),
  data: z.union([ UnitUpdateInputSchema,UnitUncheckedUpdateInputSchema ]),
  where: UnitWhereUniqueInputSchema,
}).strict() ;

export const UnitUpdateManyArgsSchema: z.ZodType<Prisma.UnitUpdateManyArgs> = z.object({
  data: z.union([ UnitUpdateManyMutationInputSchema,UnitUncheckedUpdateManyInputSchema ]),
  where: UnitWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UnitUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UnitUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UnitUpdateManyMutationInputSchema,UnitUncheckedUpdateManyInputSchema ]),
  where: UnitWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UnitDeleteManyArgsSchema: z.ZodType<Prisma.UnitDeleteManyArgs> = z.object({
  where: UnitWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderCreateArgsSchema: z.ZodType<Prisma.OrderCreateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
}).strict() ;

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
  create: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
  update: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
}).strict() ;

export const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs> = z.object({
  data: z.union([ OrderCreateManyInputSchema,OrderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OrderCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrderCreateManyInputSchema,OrderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OrderDeleteArgsSchema: z.ZodType<Prisma.OrderDeleteArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict() ;

export const OrderUpdateArgsSchema: z.ZodType<Prisma.OrderUpdateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
  where: OrderWhereUniqueInputSchema,
}).strict() ;

export const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs> = z.object({
  data: z.union([ OrderUpdateManyMutationInputSchema,OrderUncheckedUpdateManyInputSchema ]),
  where: OrderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrderUpdateManyMutationInputSchema,OrderUncheckedUpdateManyInputSchema ]),
  where: OrderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderItemCreateArgsSchema: z.ZodType<Prisma.OrderItemCreateArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  data: z.union([ OrderItemCreateInputSchema,OrderItemUncheckedCreateInputSchema ]),
}).strict() ;

export const OrderItemUpsertArgsSchema: z.ZodType<Prisma.OrderItemUpsertArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
  create: z.union([ OrderItemCreateInputSchema,OrderItemUncheckedCreateInputSchema ]),
  update: z.union([ OrderItemUpdateInputSchema,OrderItemUncheckedUpdateInputSchema ]),
}).strict() ;

export const OrderItemCreateManyArgsSchema: z.ZodType<Prisma.OrderItemCreateManyArgs> = z.object({
  data: z.union([ OrderItemCreateManyInputSchema,OrderItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OrderItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ OrderItemCreateManyInputSchema,OrderItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OrderItemDeleteArgsSchema: z.ZodType<Prisma.OrderItemDeleteArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export const OrderItemUpdateArgsSchema: z.ZodType<Prisma.OrderItemUpdateArgs> = z.object({
  select: OrderItemSelectSchema.optional(),
  include: OrderItemIncludeSchema.optional(),
  data: z.union([ OrderItemUpdateInputSchema,OrderItemUncheckedUpdateInputSchema ]),
  where: OrderItemWhereUniqueInputSchema,
}).strict() ;

export const OrderItemUpdateManyArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyArgs> = z.object({
  data: z.union([ OrderItemUpdateManyMutationInputSchema,OrderItemUncheckedUpdateManyInputSchema ]),
  where: OrderItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OrderItemUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OrderItemUpdateManyMutationInputSchema,OrderItemUncheckedUpdateManyInputSchema ]),
  where: OrderItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const OrderItemDeleteManyArgsSchema: z.ZodType<Prisma.OrderItemDeleteManyArgs> = z.object({
  where: OrderItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeCountCreateArgsSchema: z.ZodType<Prisma.CakeCountCreateArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  data: z.union([ CakeCountCreateInputSchema,CakeCountUncheckedCreateInputSchema ]),
}).strict() ;

export const CakeCountUpsertArgsSchema: z.ZodType<Prisma.CakeCountUpsertArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereUniqueInputSchema,
  create: z.union([ CakeCountCreateInputSchema,CakeCountUncheckedCreateInputSchema ]),
  update: z.union([ CakeCountUpdateInputSchema,CakeCountUncheckedUpdateInputSchema ]),
}).strict() ;

export const CakeCountCreateManyArgsSchema: z.ZodType<Prisma.CakeCountCreateManyArgs> = z.object({
  data: z.union([ CakeCountCreateManyInputSchema,CakeCountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeCountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeCountCreateManyAndReturnArgs> = z.object({
  data: z.union([ CakeCountCreateManyInputSchema,CakeCountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeCountDeleteArgsSchema: z.ZodType<Prisma.CakeCountDeleteArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  where: CakeCountWhereUniqueInputSchema,
}).strict() ;

export const CakeCountUpdateArgsSchema: z.ZodType<Prisma.CakeCountUpdateArgs> = z.object({
  select: CakeCountSelectSchema.optional(),
  include: CakeCountIncludeSchema.optional(),
  data: z.union([ CakeCountUpdateInputSchema,CakeCountUncheckedUpdateInputSchema ]),
  where: CakeCountWhereUniqueInputSchema,
}).strict() ;

export const CakeCountUpdateManyArgsSchema: z.ZodType<Prisma.CakeCountUpdateManyArgs> = z.object({
  data: z.union([ CakeCountUpdateManyMutationInputSchema,CakeCountUncheckedUpdateManyInputSchema ]),
  where: CakeCountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeCountUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeCountUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CakeCountUpdateManyMutationInputSchema,CakeCountUncheckedUpdateManyInputSchema ]),
  where: CakeCountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeCountDeleteManyArgsSchema: z.ZodType<Prisma.CakeCountDeleteManyArgs> = z.object({
  where: CakeCountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestCreateArgsSchema: z.ZodType<Prisma.CakeRequestCreateArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  data: z.union([ CakeRequestCreateInputSchema,CakeRequestUncheckedCreateInputSchema ]),
}).strict() ;

export const CakeRequestUpsertArgsSchema: z.ZodType<Prisma.CakeRequestUpsertArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereUniqueInputSchema,
  create: z.union([ CakeRequestCreateInputSchema,CakeRequestUncheckedCreateInputSchema ]),
  update: z.union([ CakeRequestUpdateInputSchema,CakeRequestUncheckedUpdateInputSchema ]),
}).strict() ;

export const CakeRequestCreateManyArgsSchema: z.ZodType<Prisma.CakeRequestCreateManyArgs> = z.object({
  data: z.union([ CakeRequestCreateManyInputSchema,CakeRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeRequestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeRequestCreateManyAndReturnArgs> = z.object({
  data: z.union([ CakeRequestCreateManyInputSchema,CakeRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeRequestDeleteArgsSchema: z.ZodType<Prisma.CakeRequestDeleteArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  where: CakeRequestWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestUpdateArgsSchema: z.ZodType<Prisma.CakeRequestUpdateArgs> = z.object({
  select: CakeRequestSelectSchema.optional(),
  include: CakeRequestIncludeSchema.optional(),
  data: z.union([ CakeRequestUpdateInputSchema,CakeRequestUncheckedUpdateInputSchema ]),
  where: CakeRequestWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestUpdateManyArgs> = z.object({
  data: z.union([ CakeRequestUpdateManyMutationInputSchema,CakeRequestUncheckedUpdateManyInputSchema ]),
  where: CakeRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeRequestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CakeRequestUpdateManyMutationInputSchema,CakeRequestUncheckedUpdateManyInputSchema ]),
  where: CakeRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestDeleteManyArgs> = z.object({
  where: CakeRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestItemsCreateArgsSchema: z.ZodType<Prisma.CakeRequestItemsCreateArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  data: z.union([ CakeRequestItemsCreateInputSchema,CakeRequestItemsUncheckedCreateInputSchema ]),
}).strict() ;

export const CakeRequestItemsUpsertArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpsertArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
  create: z.union([ CakeRequestItemsCreateInputSchema,CakeRequestItemsUncheckedCreateInputSchema ]),
  update: z.union([ CakeRequestItemsUpdateInputSchema,CakeRequestItemsUncheckedUpdateInputSchema ]),
}).strict() ;

export const CakeRequestItemsCreateManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyArgs> = z.object({
  data: z.union([ CakeRequestItemsCreateManyInputSchema,CakeRequestItemsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeRequestItemsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyAndReturnArgs> = z.object({
  data: z.union([ CakeRequestItemsCreateManyInputSchema,CakeRequestItemsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CakeRequestItemsDeleteArgsSchema: z.ZodType<Prisma.CakeRequestItemsDeleteArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestItemsUpdateArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateArgs> = z.object({
  select: CakeRequestItemsSelectSchema.optional(),
  include: CakeRequestItemsIncludeSchema.optional(),
  data: z.union([ CakeRequestItemsUpdateInputSchema,CakeRequestItemsUncheckedUpdateInputSchema ]),
  where: CakeRequestItemsWhereUniqueInputSchema,
}).strict() ;

export const CakeRequestItemsUpdateManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyArgs> = z.object({
  data: z.union([ CakeRequestItemsUpdateManyMutationInputSchema,CakeRequestItemsUncheckedUpdateManyInputSchema ]),
  where: CakeRequestItemsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestItemsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CakeRequestItemsUpdateManyMutationInputSchema,CakeRequestItemsUncheckedUpdateManyInputSchema ]),
  where: CakeRequestItemsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CakeRequestItemsDeleteManyArgsSchema: z.ZodType<Prisma.CakeRequestItemsDeleteManyArgs> = z.object({
  where: CakeRequestItemsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;