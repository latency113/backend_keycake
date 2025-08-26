import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const DepartmentScalarFieldEnumSchema = z.enum(['id','name','group_number']);

export const ClassroomScalarFieldEnumSchema = z.enum(['id','name','department_id','grade_level_id']);

export const GradeLevelScalarFieldEnumSchema = z.enum(['id','level','year']);

export const UserScalarFieldEnumSchema = z.enum(['id','firstname','lastname','username','password','email','role','createdAt','updatedAt']);

export const TeamScalarFieldEnumSchema = z.enum(['id','name','classroom_id']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','price']);

export const OrderScalarFieldEnumSchema = z.enum(['id','customerName','classroom_id','team_id','orderDate','totalPrice','book_number','number','phone','pickup_date','depository','deposit','advisor','status','createdAt','updatedAt']);

export const OrderItemScalarFieldEnumSchema = z.enum(['id','order_id','product_id','pound','quantity','unitPrice','subtotal','createdAt','updatedAt']);

export const CakeRequestScalarFieldEnumSchema = z.enum(['id','requestDate','status','note','user_id','department_id','createdAt','updatedAt']);

export const CakeRequestItemsScalarFieldEnumSchema = z.enum(['id','request_id','order_item_id']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const RoleSchema = z.enum(['ADMIN','OFFICER','USER']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export const GradeLevelTypeSchema = z.enum(['VOCATIONAL','HIGHER']);

export type GradeLevelTypeType = `${z.infer<typeof GradeLevelTypeSchema>}`

export const RequestStatusSchema = z.enum(['pending','approved','rejected']);

export type RequestStatusType = `${z.infer<typeof RequestStatusSchema>}`

export const OrderStatusSchema = z.enum(['pending','complete']);

export type OrderStatusType = `${z.infer<typeof OrderStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DEPARTMENT SCHEMA
/////////////////////////////////////////

export const DepartmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  group_number: z.string(),
})

export type Department = z.infer<typeof DepartmentSchema>

/////////////////////////////////////////
// DEPARTMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const DepartmentPartialSchema = DepartmentSchema.partial()

export type DepartmentPartial = z.infer<typeof DepartmentPartialSchema>

// DEPARTMENT OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const DepartmentOptionalDefaultsSchema = DepartmentSchema.merge(z.object({
  id: z.string().uuid().optional(),
}))

export type DepartmentOptionalDefaults = z.infer<typeof DepartmentOptionalDefaultsSchema>

// DEPARTMENT RELATION SCHEMA
//------------------------------------------------------

export type DepartmentRelations = {
  classroom: ClassroomWithRelations[];
  CakeRequest: CakeRequestWithRelations[];
};

export type DepartmentWithRelations = z.infer<typeof DepartmentSchema> & DepartmentRelations

export const DepartmentWithRelationsSchema: z.ZodType<DepartmentWithRelations> = DepartmentSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestWithRelationsSchema).array(),
}))

// DEPARTMENT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type DepartmentOptionalDefaultsRelations = {
  classroom: ClassroomOptionalDefaultsWithRelations[];
  CakeRequest: CakeRequestOptionalDefaultsWithRelations[];
};

export type DepartmentOptionalDefaultsWithRelations = z.infer<typeof DepartmentOptionalDefaultsSchema> & DepartmentOptionalDefaultsRelations

export const DepartmentOptionalDefaultsWithRelationsSchema: z.ZodType<DepartmentOptionalDefaultsWithRelations> = DepartmentOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomOptionalDefaultsWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestOptionalDefaultsWithRelationsSchema).array(),
}))

// DEPARTMENT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type DepartmentPartialRelations = {
  classroom?: ClassroomPartialWithRelations[];
  CakeRequest?: CakeRequestPartialWithRelations[];
};

export type DepartmentPartialWithRelations = z.infer<typeof DepartmentPartialSchema> & DepartmentPartialRelations

export const DepartmentPartialWithRelationsSchema: z.ZodType<DepartmentPartialWithRelations> = DepartmentPartialSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
})).partial()

export type DepartmentOptionalDefaultsWithPartialRelations = z.infer<typeof DepartmentOptionalDefaultsSchema> & DepartmentPartialRelations

export const DepartmentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<DepartmentOptionalDefaultsWithPartialRelations> = DepartmentOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

export type DepartmentWithPartialRelations = z.infer<typeof DepartmentSchema> & DepartmentPartialRelations

export const DepartmentWithPartialRelationsSchema: z.ZodType<DepartmentWithPartialRelations> = DepartmentSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
  CakeRequest: z.lazy(() => CakeRequestPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// CLASSROOM SCHEMA
/////////////////////////////////////////

export const ClassroomSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string(),
})

export type Classroom = z.infer<typeof ClassroomSchema>

/////////////////////////////////////////
// CLASSROOM PARTIAL SCHEMA
/////////////////////////////////////////

export const ClassroomPartialSchema = ClassroomSchema.partial()

export type ClassroomPartial = z.infer<typeof ClassroomPartialSchema>

// CLASSROOM OPTIONAL DEFAULTS SCHEMA
//------------------------------------------------------

export const ClassroomOptionalDefaultsSchema = ClassroomSchema.merge(z.object({
  id: z.string().uuid().optional(),
}))

export type ClassroomOptionalDefaults = z.infer<typeof ClassroomOptionalDefaultsSchema>

// CLASSROOM RELATION SCHEMA
//------------------------------------------------------

export type ClassroomRelations = {
  department: DepartmentWithRelations;
  grade_level?: GradeLevelWithRelations | null;
  teams: TeamWithRelations[];
  orders: OrderWithRelations[];
};

export type ClassroomWithRelations = z.infer<typeof ClassroomSchema> & ClassroomRelations

export const ClassroomWithRelationsSchema: z.ZodType<ClassroomWithRelations> = ClassroomSchema.merge(z.object({
  department: z.lazy(() => DepartmentWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamWithRelationsSchema).array(),
  orders: z.lazy(() => OrderWithRelationsSchema).array(),
}))

// CLASSROOM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type ClassroomOptionalDefaultsRelations = {
  department: DepartmentOptionalDefaultsWithRelations;
  grade_level?: GradeLevelOptionalDefaultsWithRelations | null;
  teams: TeamOptionalDefaultsWithRelations[];
  orders: OrderOptionalDefaultsWithRelations[];
};

export type ClassroomOptionalDefaultsWithRelations = z.infer<typeof ClassroomOptionalDefaultsSchema> & ClassroomOptionalDefaultsRelations

export const ClassroomOptionalDefaultsWithRelationsSchema: z.ZodType<ClassroomOptionalDefaultsWithRelations> = ClassroomOptionalDefaultsSchema.merge(z.object({
  department: z.lazy(() => DepartmentOptionalDefaultsWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelOptionalDefaultsWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamOptionalDefaultsWithRelationsSchema).array(),
  orders: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema).array(),
}))

// CLASSROOM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ClassroomPartialRelations = {
  department?: DepartmentPartialWithRelations;
  grade_level?: GradeLevelPartialWithRelations | null;
  teams?: TeamPartialWithRelations[];
  orders?: OrderPartialWithRelations[];
};

export type ClassroomPartialWithRelations = z.infer<typeof ClassroomPartialSchema> & ClassroomPartialRelations

export const ClassroomPartialWithRelationsSchema: z.ZodType<ClassroomPartialWithRelations> = ClassroomPartialSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
})).partial()

export type ClassroomOptionalDefaultsWithPartialRelations = z.infer<typeof ClassroomOptionalDefaultsSchema> & ClassroomPartialRelations

export const ClassroomOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ClassroomOptionalDefaultsWithPartialRelations> = ClassroomOptionalDefaultsSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

export type ClassroomWithPartialRelations = z.infer<typeof ClassroomSchema> & ClassroomPartialRelations

export const ClassroomWithPartialRelationsSchema: z.ZodType<ClassroomWithPartialRelations> = ClassroomSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  grade_level: z.lazy(() => GradeLevelPartialWithRelationsSchema).nullish(),
  teams: z.lazy(() => TeamPartialWithRelationsSchema).array(),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// GRADE LEVEL SCHEMA
/////////////////////////////////////////

export const GradeLevelSchema = z.object({
  level: GradeLevelTypeSchema,
  id: z.string().uuid(),
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
  id: z.string().uuid().optional(),
}))

export type GradeLevelOptionalDefaults = z.infer<typeof GradeLevelOptionalDefaultsSchema>

// GRADE LEVEL RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelRelations = {
  classroom: ClassroomWithRelations[];
};

export type GradeLevelWithRelations = z.infer<typeof GradeLevelSchema> & GradeLevelRelations

export const GradeLevelWithRelationsSchema: z.ZodType<GradeLevelWithRelations> = GradeLevelSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomWithRelationsSchema).array(),
}))

// GRADE LEVEL OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelOptionalDefaultsRelations = {
  classroom: ClassroomOptionalDefaultsWithRelations[];
};

export type GradeLevelOptionalDefaultsWithRelations = z.infer<typeof GradeLevelOptionalDefaultsSchema> & GradeLevelOptionalDefaultsRelations

export const GradeLevelOptionalDefaultsWithRelationsSchema: z.ZodType<GradeLevelOptionalDefaultsWithRelations> = GradeLevelOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomOptionalDefaultsWithRelationsSchema).array(),
}))

// GRADE LEVEL PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type GradeLevelPartialRelations = {
  classroom?: ClassroomPartialWithRelations[];
};

export type GradeLevelPartialWithRelations = z.infer<typeof GradeLevelPartialSchema> & GradeLevelPartialRelations

export const GradeLevelPartialWithRelationsSchema: z.ZodType<GradeLevelPartialWithRelations> = GradeLevelPartialSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
})).partial()

export type GradeLevelOptionalDefaultsWithPartialRelations = z.infer<typeof GradeLevelOptionalDefaultsSchema> & GradeLevelPartialRelations

export const GradeLevelOptionalDefaultsWithPartialRelationsSchema: z.ZodType<GradeLevelOptionalDefaultsWithPartialRelations> = GradeLevelOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
}).partial())

export type GradeLevelWithPartialRelations = z.infer<typeof GradeLevelSchema> & GradeLevelPartialRelations

export const GradeLevelWithPartialRelationsSchema: z.ZodType<GradeLevelWithPartialRelations> = GradeLevelSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: RoleSchema,
  id: z.string().uuid(),
  firstname: z.string(),
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
  id: z.string().uuid().optional(),
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
  id: z.string().uuid(),
  name: z.string(),
  classroom_id: z.string(),
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
  id: z.string().uuid().optional(),
}))

export type TeamOptionalDefaults = z.infer<typeof TeamOptionalDefaultsSchema>

// TEAM RELATION SCHEMA
//------------------------------------------------------

export type TeamRelations = {
  classroom: ClassroomWithRelations;
  orders: OrderWithRelations[];
};

export type TeamWithRelations = z.infer<typeof TeamSchema> & TeamRelations

export const TeamWithRelationsSchema: z.ZodType<TeamWithRelations> = TeamSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomWithRelationsSchema),
  orders: z.lazy(() => OrderWithRelationsSchema).array(),
}))

// TEAM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type TeamOptionalDefaultsRelations = {
  classroom: ClassroomOptionalDefaultsWithRelations;
  orders: OrderOptionalDefaultsWithRelations[];
};

export type TeamOptionalDefaultsWithRelations = z.infer<typeof TeamOptionalDefaultsSchema> & TeamOptionalDefaultsRelations

export const TeamOptionalDefaultsWithRelationsSchema: z.ZodType<TeamOptionalDefaultsWithRelations> = TeamOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomOptionalDefaultsWithRelationsSchema),
  orders: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema).array(),
}))

// TEAM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type TeamPartialRelations = {
  classroom?: ClassroomPartialWithRelations;
  orders?: OrderPartialWithRelations[];
};

export type TeamPartialWithRelations = z.infer<typeof TeamPartialSchema> & TeamPartialRelations

export const TeamPartialWithRelationsSchema: z.ZodType<TeamPartialWithRelations> = TeamPartialSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
})).partial()

export type TeamOptionalDefaultsWithPartialRelations = z.infer<typeof TeamOptionalDefaultsSchema> & TeamPartialRelations

export const TeamOptionalDefaultsWithPartialRelationsSchema: z.ZodType<TeamOptionalDefaultsWithPartialRelations> = TeamOptionalDefaultsSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

export type TeamWithPartialRelations = z.infer<typeof TeamSchema> & TeamPartialRelations

export const TeamWithPartialRelationsSchema: z.ZodType<TeamWithPartialRelations> = TeamSchema.merge(z.object({
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema),
  orders: z.lazy(() => OrderPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  price: z.number(),
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
  id: z.string().uuid().optional(),
}))

export type ProductOptionalDefaults = z.infer<typeof ProductOptionalDefaultsSchema>

// PRODUCT RELATION SCHEMA
//------------------------------------------------------

export type ProductRelations = {
  orderItems: OrderItemWithRelations[];
};

export type ProductWithRelations = z.infer<typeof ProductSchema> & ProductRelations

export const ProductWithRelationsSchema: z.ZodType<ProductWithRelations> = ProductSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemWithRelationsSchema).array(),
}))

// PRODUCT OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type ProductOptionalDefaultsRelations = {
  orderItems: OrderItemOptionalDefaultsWithRelations[];
};

export type ProductOptionalDefaultsWithRelations = z.infer<typeof ProductOptionalDefaultsSchema> & ProductOptionalDefaultsRelations

export const ProductOptionalDefaultsWithRelationsSchema: z.ZodType<ProductOptionalDefaultsWithRelations> = ProductOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemOptionalDefaultsWithRelationsSchema).array(),
}))

// PRODUCT PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type ProductPartialRelations = {
  orderItems?: OrderItemPartialWithRelations[];
};

export type ProductPartialWithRelations = z.infer<typeof ProductPartialSchema> & ProductPartialRelations

export const ProductPartialWithRelationsSchema: z.ZodType<ProductPartialWithRelations> = ProductPartialSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
})).partial()

export type ProductOptionalDefaultsWithPartialRelations = z.infer<typeof ProductOptionalDefaultsSchema> & ProductPartialRelations

export const ProductOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ProductOptionalDefaultsWithPartialRelations> = ProductOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
}).partial())

export type ProductWithPartialRelations = z.infer<typeof ProductSchema> & ProductPartialRelations

export const ProductWithPartialRelationsSchema: z.ZodType<ProductWithPartialRelations> = ProductSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  status: OrderStatusSchema,
  id: z.string().uuid(),
  customerName: z.string(),
  classroom_id: z.string().nullish(),
  team_id: z.string().nullish(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().nullish(),
  deposit: z.number().int(),
  advisor: z.string(),
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
  status: OrderStatusSchema.optional(),
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderOptionalDefaults = z.infer<typeof OrderOptionalDefaultsSchema>

// ORDER RELATION SCHEMA
//------------------------------------------------------

export type OrderRelations = {
  orderItems: OrderItemWithRelations[];
  team?: TeamWithRelations | null;
  classroom?: ClassroomWithRelations | null;
};

export type OrderWithRelations = z.infer<typeof OrderSchema> & OrderRelations

export const OrderWithRelationsSchema: z.ZodType<OrderWithRelations> = OrderSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemWithRelationsSchema).array(),
  team: z.lazy(() => TeamWithRelationsSchema).nullish(),
  classroom: z.lazy(() => ClassroomWithRelationsSchema).nullish(),
}))

// ORDER OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type OrderOptionalDefaultsRelations = {
  orderItems: OrderItemOptionalDefaultsWithRelations[];
  team?: TeamOptionalDefaultsWithRelations | null;
  classroom?: ClassroomOptionalDefaultsWithRelations | null;
};

export type OrderOptionalDefaultsWithRelations = z.infer<typeof OrderOptionalDefaultsSchema> & OrderOptionalDefaultsRelations

export const OrderOptionalDefaultsWithRelationsSchema: z.ZodType<OrderOptionalDefaultsWithRelations> = OrderOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemOptionalDefaultsWithRelationsSchema).array(),
  team: z.lazy(() => TeamOptionalDefaultsWithRelationsSchema).nullish(),
  classroom: z.lazy(() => ClassroomOptionalDefaultsWithRelationsSchema).nullish(),
}))

// ORDER PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type OrderPartialRelations = {
  orderItems?: OrderItemPartialWithRelations[];
  team?: TeamPartialWithRelations | null;
  classroom?: ClassroomPartialWithRelations | null;
};

export type OrderPartialWithRelations = z.infer<typeof OrderPartialSchema> & OrderPartialRelations

export const OrderPartialWithRelationsSchema: z.ZodType<OrderPartialWithRelations> = OrderPartialSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).nullish(),
})).partial()

export type OrderOptionalDefaultsWithPartialRelations = z.infer<typeof OrderOptionalDefaultsSchema> & OrderPartialRelations

export const OrderOptionalDefaultsWithPartialRelationsSchema: z.ZodType<OrderOptionalDefaultsWithPartialRelations> = OrderOptionalDefaultsSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).nullish(),
}).partial())

export type OrderWithPartialRelations = z.infer<typeof OrderSchema> & OrderPartialRelations

export const OrderWithPartialRelationsSchema: z.ZodType<OrderWithPartialRelations> = OrderSchema.merge(z.object({
  orderItems: z.lazy(() => OrderItemPartialWithRelationsSchema).array(),
  team: z.lazy(() => TeamPartialWithRelationsSchema).nullish(),
  classroom: z.lazy(() => ClassroomPartialWithRelationsSchema).nullish(),
}).partial())

/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  id: z.string().uuid(),
  order_id: z.string(),
  product_id: z.string(),
  pound: z.number().int(),
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
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type OrderItemOptionalDefaults = z.infer<typeof OrderItemOptionalDefaultsSchema>

// ORDER ITEM RELATION SCHEMA
//------------------------------------------------------

export type OrderItemRelations = {
  order: OrderWithRelations;
  product: ProductWithRelations;
  CakeRequestItems: CakeRequestItemsWithRelations[];
};

export type OrderItemWithRelations = z.infer<typeof OrderItemSchema> & OrderItemRelations

export const OrderItemWithRelationsSchema: z.ZodType<OrderItemWithRelations> = OrderItemSchema.merge(z.object({
  order: z.lazy(() => OrderWithRelationsSchema),
  product: z.lazy(() => ProductWithRelationsSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsWithRelationsSchema).array(),
}))

// ORDER ITEM OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type OrderItemOptionalDefaultsRelations = {
  order: OrderOptionalDefaultsWithRelations;
  product: ProductOptionalDefaultsWithRelations;
  CakeRequestItems: CakeRequestItemsOptionalDefaultsWithRelations[];
};

export type OrderItemOptionalDefaultsWithRelations = z.infer<typeof OrderItemOptionalDefaultsSchema> & OrderItemOptionalDefaultsRelations

export const OrderItemOptionalDefaultsWithRelationsSchema: z.ZodType<OrderItemOptionalDefaultsWithRelations> = OrderItemOptionalDefaultsSchema.merge(z.object({
  order: z.lazy(() => OrderOptionalDefaultsWithRelationsSchema),
  product: z.lazy(() => ProductOptionalDefaultsWithRelationsSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsOptionalDefaultsWithRelationsSchema).array(),
}))

// ORDER ITEM PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type OrderItemPartialRelations = {
  order?: OrderPartialWithRelations;
  product?: ProductPartialWithRelations;
  CakeRequestItems?: CakeRequestItemsPartialWithRelations[];
};

export type OrderItemPartialWithRelations = z.infer<typeof OrderItemPartialSchema> & OrderItemPartialRelations

export const OrderItemPartialWithRelationsSchema: z.ZodType<OrderItemPartialWithRelations> = OrderItemPartialSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
})).partial()

export type OrderItemOptionalDefaultsWithPartialRelations = z.infer<typeof OrderItemOptionalDefaultsSchema> & OrderItemPartialRelations

export const OrderItemOptionalDefaultsWithPartialRelationsSchema: z.ZodType<OrderItemOptionalDefaultsWithPartialRelations> = OrderItemOptionalDefaultsSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

export type OrderItemWithPartialRelations = z.infer<typeof OrderItemSchema> & OrderItemPartialRelations

export const OrderItemWithPartialRelationsSchema: z.ZodType<OrderItemWithPartialRelations> = OrderItemSchema.merge(z.object({
  order: z.lazy(() => OrderPartialWithRelationsSchema),
  product: z.lazy(() => ProductPartialWithRelationsSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// CAKE REQUEST SCHEMA
/////////////////////////////////////////

export const CakeRequestSchema = z.object({
  status: RequestStatusSchema,
  id: z.string().uuid(),
  requestDate: z.coerce.date(),
  note: z.string().nullish(),
  user_id: z.string(),
  department_id: z.string(),
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
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CakeRequestOptionalDefaults = z.infer<typeof CakeRequestOptionalDefaultsSchema>

// CAKE REQUEST RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestRelations = {
  department: DepartmentWithRelations;
  user: UserWithRelations;
  items: CakeRequestItemsWithRelations[];
};

export type CakeRequestWithRelations = z.infer<typeof CakeRequestSchema> & CakeRequestRelations

export const CakeRequestWithRelationsSchema: z.ZodType<CakeRequestWithRelations> = CakeRequestSchema.merge(z.object({
  department: z.lazy(() => DepartmentWithRelationsSchema),
  user: z.lazy(() => UserWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsWithRelationsSchema).array(),
}))

// CAKE REQUEST OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestOptionalDefaultsRelations = {
  department: DepartmentOptionalDefaultsWithRelations;
  user: UserOptionalDefaultsWithRelations;
  items: CakeRequestItemsOptionalDefaultsWithRelations[];
};

export type CakeRequestOptionalDefaultsWithRelations = z.infer<typeof CakeRequestOptionalDefaultsSchema> & CakeRequestOptionalDefaultsRelations

export const CakeRequestOptionalDefaultsWithRelationsSchema: z.ZodType<CakeRequestOptionalDefaultsWithRelations> = CakeRequestOptionalDefaultsSchema.merge(z.object({
  department: z.lazy(() => DepartmentOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => UserOptionalDefaultsWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsOptionalDefaultsWithRelationsSchema).array(),
}))

// CAKE REQUEST PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestPartialRelations = {
  department?: DepartmentPartialWithRelations;
  user?: UserPartialWithRelations;
  items?: CakeRequestItemsPartialWithRelations[];
};

export type CakeRequestPartialWithRelations = z.infer<typeof CakeRequestPartialSchema> & CakeRequestPartialRelations

export const CakeRequestPartialWithRelationsSchema: z.ZodType<CakeRequestPartialWithRelations> = CakeRequestPartialSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
})).partial()

export type CakeRequestOptionalDefaultsWithPartialRelations = z.infer<typeof CakeRequestOptionalDefaultsSchema> & CakeRequestPartialRelations

export const CakeRequestOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CakeRequestOptionalDefaultsWithPartialRelations> = CakeRequestOptionalDefaultsSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

export type CakeRequestWithPartialRelations = z.infer<typeof CakeRequestSchema> & CakeRequestPartialRelations

export const CakeRequestWithPartialRelationsSchema: z.ZodType<CakeRequestWithPartialRelations> = CakeRequestSchema.merge(z.object({
  department: z.lazy(() => DepartmentPartialWithRelationsSchema),
  user: z.lazy(() => UserPartialWithRelationsSchema),
  items: z.lazy(() => CakeRequestItemsPartialWithRelationsSchema).array(),
}).partial())

/////////////////////////////////////////
// CAKE REQUEST ITEMS SCHEMA
/////////////////////////////////////////

export const CakeRequestItemsSchema = z.object({
  id: z.string().uuid(),
  request_id: z.string(),
  order_item_id: z.string(),
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
  id: z.string().uuid().optional(),
}))

export type CakeRequestItemsOptionalDefaults = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema>

// CAKE REQUEST ITEMS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsRelations = {
  request: CakeRequestWithRelations;
  orderItem: OrderItemWithRelations;
};

export type CakeRequestItemsWithRelations = z.infer<typeof CakeRequestItemsSchema> & CakeRequestItemsRelations

export const CakeRequestItemsWithRelationsSchema: z.ZodType<CakeRequestItemsWithRelations> = CakeRequestItemsSchema.merge(z.object({
  request: z.lazy(() => CakeRequestWithRelationsSchema),
  orderItem: z.lazy(() => OrderItemWithRelationsSchema),
}))

// CAKE REQUEST ITEMS OPTIONAL DEFAULTS RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsOptionalDefaultsRelations = {
  request: CakeRequestOptionalDefaultsWithRelations;
  orderItem: OrderItemOptionalDefaultsWithRelations;
};

export type CakeRequestItemsOptionalDefaultsWithRelations = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema> & CakeRequestItemsOptionalDefaultsRelations

export const CakeRequestItemsOptionalDefaultsWithRelationsSchema: z.ZodType<CakeRequestItemsOptionalDefaultsWithRelations> = CakeRequestItemsOptionalDefaultsSchema.merge(z.object({
  request: z.lazy(() => CakeRequestOptionalDefaultsWithRelationsSchema),
  orderItem: z.lazy(() => OrderItemOptionalDefaultsWithRelationsSchema),
}))

// CAKE REQUEST ITEMS PARTIAL RELATION SCHEMA
//------------------------------------------------------

export type CakeRequestItemsPartialRelations = {
  request?: CakeRequestPartialWithRelations;
  orderItem?: OrderItemPartialWithRelations;
};

export type CakeRequestItemsPartialWithRelations = z.infer<typeof CakeRequestItemsPartialSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsPartialWithRelationsSchema: z.ZodType<CakeRequestItemsPartialWithRelations> = CakeRequestItemsPartialSchema.merge(z.object({
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
  orderItem: z.lazy(() => OrderItemPartialWithRelationsSchema),
})).partial()

export type CakeRequestItemsOptionalDefaultsWithPartialRelations = z.infer<typeof CakeRequestItemsOptionalDefaultsSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CakeRequestItemsOptionalDefaultsWithPartialRelations> = CakeRequestItemsOptionalDefaultsSchema.merge(z.object({
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
  orderItem: z.lazy(() => OrderItemPartialWithRelationsSchema),
}).partial())

export type CakeRequestItemsWithPartialRelations = z.infer<typeof CakeRequestItemsSchema> & CakeRequestItemsPartialRelations

export const CakeRequestItemsWithPartialRelationsSchema: z.ZodType<CakeRequestItemsWithPartialRelations> = CakeRequestItemsSchema.merge(z.object({
  request: z.lazy(() => CakeRequestPartialWithRelationsSchema),
  orderItem: z.lazy(() => OrderItemPartialWithRelationsSchema),
}).partial())

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// DEPARTMENT
//------------------------------------------------------

export const DepartmentIncludeSchema: z.ZodType<Prisma.DepartmentInclude> = z.object({
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomFindManyArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DepartmentArgsSchema: z.ZodType<Prisma.DepartmentDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentSelectSchema).optional(),
  include: z.lazy(() => DepartmentIncludeSchema).optional(),
}).strict();

export const DepartmentCountOutputTypeArgsSchema: z.ZodType<Prisma.DepartmentCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DepartmentCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DepartmentCountOutputTypeSelectSchema: z.ZodType<Prisma.DepartmentCountOutputTypeSelect> = z.object({
  classroom: z.boolean().optional(),
  CakeRequest: z.boolean().optional(),
}).strict();

export const DepartmentSelectSchema: z.ZodType<Prisma.DepartmentSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  group_number: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomFindManyArgsSchema)]).optional(),
  CakeRequest: z.union([z.boolean(),z.lazy(() => CakeRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DepartmentCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CLASSROOM
//------------------------------------------------------

export const ClassroomIncludeSchema: z.ZodType<Prisma.ClassroomInclude> = z.object({
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  grade_level: z.union([z.boolean(),z.lazy(() => GradeLevelArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClassroomCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClassroomArgsSchema: z.ZodType<Prisma.ClassroomDefaultArgs> = z.object({
  select: z.lazy(() => ClassroomSelectSchema).optional(),
  include: z.lazy(() => ClassroomIncludeSchema).optional(),
}).strict();

export const ClassroomCountOutputTypeArgsSchema: z.ZodType<Prisma.ClassroomCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClassroomCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClassroomCountOutputTypeSelectSchema: z.ZodType<Prisma.ClassroomCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
  orders: z.boolean().optional(),
}).strict();

export const ClassroomSelectSchema: z.ZodType<Prisma.ClassroomSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  department_id: z.boolean().optional(),
  grade_level_id: z.boolean().optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  grade_level: z.union([z.boolean(),z.lazy(() => GradeLevelArgsSchema)]).optional(),
  teams: z.union([z.boolean(),z.lazy(() => TeamFindManyArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClassroomCountOutputTypeArgsSchema)]).optional(),
}).strict()

// GRADE LEVEL
//------------------------------------------------------

export const GradeLevelIncludeSchema: z.ZodType<Prisma.GradeLevelInclude> = z.object({
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomFindManyArgsSchema)]).optional(),
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
  classroom: z.boolean().optional(),
}).strict();

export const GradeLevelSelectSchema: z.ZodType<Prisma.GradeLevelSelect> = z.object({
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  year: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomFindManyArgsSchema)]).optional(),
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
  firstname: z.boolean().optional(),
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
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
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
  classroom_id: z.boolean().optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeamCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
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
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER
//------------------------------------------------------

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
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
  classroom_id: z.boolean().optional(),
  team_id: z.boolean().optional(),
  orderDate: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  book_number: z.boolean().optional(),
  number: z.boolean().optional(),
  phone: z.boolean().optional(),
  pickup_date: z.boolean().optional(),
  depository: z.boolean().optional(),
  deposit: z.boolean().optional(),
  advisor: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderItems: z.union([z.boolean(),z.lazy(() => OrderItemFindManyArgsSchema)]).optional(),
  team: z.union([z.boolean(),z.lazy(() => TeamArgsSchema)]).optional(),
  classroom: z.union([z.boolean(),z.lazy(() => ClassroomArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER ITEM
//------------------------------------------------------

export const OrderItemIncludeSchema: z.ZodType<Prisma.OrderItemInclude> = z.object({
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  CakeRequestItems: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemDefaultArgs> = z.object({
  select: z.lazy(() => OrderItemSelectSchema).optional(),
  include: z.lazy(() => OrderItemIncludeSchema).optional(),
}).strict();

export const OrderItemCountOutputTypeArgsSchema: z.ZodType<Prisma.OrderItemCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OrderItemCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrderItemCountOutputTypeSelectSchema: z.ZodType<Prisma.OrderItemCountOutputTypeSelect> = z.object({
  CakeRequestItems: z.boolean().optional(),
}).strict();

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  order_id: z.boolean().optional(),
  product_id: z.boolean().optional(),
  pound: z.boolean().optional(),
  quantity: z.boolean().optional(),
  unitPrice: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  order: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  CakeRequestItems: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrderItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CAKE REQUEST
//------------------------------------------------------

export const CakeRequestIncludeSchema: z.ZodType<Prisma.CakeRequestInclude> = z.object({
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
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
  department_id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  department: z.union([z.boolean(),z.lazy(() => DepartmentArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  items: z.union([z.boolean(),z.lazy(() => CakeRequestItemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CakeRequestCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CAKE REQUEST ITEMS
//------------------------------------------------------

export const CakeRequestItemsIncludeSchema: z.ZodType<Prisma.CakeRequestItemsInclude> = z.object({
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
}).strict()

export const CakeRequestItemsArgsSchema: z.ZodType<Prisma.CakeRequestItemsDefaultArgs> = z.object({
  select: z.lazy(() => CakeRequestItemsSelectSchema).optional(),
  include: z.lazy(() => CakeRequestItemsIncludeSchema).optional(),
}).strict();

export const CakeRequestItemsSelectSchema: z.ZodType<Prisma.CakeRequestItemsSelect> = z.object({
  id: z.boolean().optional(),
  request_id: z.boolean().optional(),
  order_item_id: z.boolean().optional(),
  request: z.union([z.boolean(),z.lazy(() => CakeRequestArgsSchema)]).optional(),
  orderItem: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const DepartmentWhereInputSchema: z.ZodType<Prisma.DepartmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict();

export const DepartmentOrderByWithRelationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export const DepartmentWhereUniqueInputSchema: z.ZodType<Prisma.DepartmentWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentWhereInputSchema),z.lazy(() => DepartmentWhereInputSchema).array() ]).optional(),
  group_number: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestListRelationFilterSchema).optional()
}).strict());

export const DepartmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.DepartmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DepartmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DepartmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DepartmentMinOrderByAggregateInputSchema).optional()
}).strict();

export const DepartmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DepartmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema),z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema),z.lazy(() => DepartmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  group_number: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ClassroomWhereInputSchema: z.ZodType<Prisma.ClassroomWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  grade_level: z.union([ z.lazy(() => GradeLevelNullableScalarRelationFilterSchema),z.lazy(() => GradeLevelWhereInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const ClassroomOrderByWithRelationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelOrderByWithRelationInputSchema).optional(),
  teams: z.lazy(() => TeamOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ClassroomWhereUniqueInputSchema: z.ZodType<Prisma.ClassroomWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomWhereInputSchema),z.lazy(() => ClassroomWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  grade_level: z.union([ z.lazy(() => GradeLevelNullableScalarRelationFilterSchema),z.lazy(() => GradeLevelWhereInputSchema) ]).optional().nullable(),
  teams: z.lazy(() => TeamListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const ClassroomOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClassroomOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClassroomCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClassroomMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClassroomMinOrderByAggregateInputSchema).optional()
}).strict();

export const ClassroomScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClassroomScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema),z.lazy(() => ClassroomScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GradeLevelWhereInputSchema: z.ZodType<Prisma.GradeLevelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional()
}).strict();

export const GradeLevelOrderByWithRelationInputSchema: z.ZodType<Prisma.GradeLevelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  year: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByRelationAggregateInputSchema).optional()
}).strict();

export const GradeLevelWhereUniqueInputSchema: z.ZodType<Prisma.GradeLevelWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  level_year: z.lazy(() => GradeLevelLevelYearCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GradeLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GradeLevelWhereInputSchema),z.lazy(() => GradeLevelWhereInputSchema).array() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  classroom: z.lazy(() => ClassroomListRelationFilterSchema).optional()
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumGradeLevelTypeWithAggregatesFilterSchema),z.lazy(() => GradeLevelTypeSchema) ]).optional(),
  year: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  firstname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
  firstname: z.lazy(() => SortOrderSchema).optional(),
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
    id: z.string().uuid(),
    username: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  firstname: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
  firstname: z.lazy(() => SortOrderSchema).optional(),
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  firstname: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
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
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  classroom: z.union([ z.lazy(() => ClassroomScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict();

export const TeamOrderByWithRelationInputSchema: z.ZodType<Prisma.TeamOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TeamWhereUniqueInputSchema: z.ZodType<Prisma.TeamWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamWhereInputSchema),z.lazy(() => TeamWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  classroom: z.union([ z.lazy(() => ClassroomScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional()
}).strict());

export const TeamOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeamCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeamMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeamScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeamScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereWithAggregatesInputSchema),z.lazy(() => TeamScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional()
}).strict());

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  advisor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  team: z.union([ z.lazy(() => TeamNullableScalarRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  classroom: z.union([ z.lazy(() => ClassroomNullableScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional().nullable(),
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orderItems: z.lazy(() => OrderItemOrderByRelationAggregateInputSchema).optional(),
  team: z.lazy(() => TeamOrderByWithRelationInputSchema).optional(),
  classroom: z.lazy(() => ClassroomOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  book_number_number: z.lazy(() => OrderBook_numberNumberCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  advisor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orderItems: z.lazy(() => OrderItemListRelationFilterSchema).optional(),
  team: z.union([ z.lazy(() => TeamNullableScalarRelationFilterSchema),z.lazy(() => TeamWhereInputSchema) ]).optional().nullable(),
  classroom: z.union([ z.lazy(() => ClassroomNullableScalarRelationFilterSchema),z.lazy(() => ClassroomWhereInputSchema) ]).optional().nullable(),
}).strict());

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  team_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  phone: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  advisor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusWithAggregatesFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order: z.union([ z.lazy(() => OrderScalarRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export const OrderItemOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  order: z.lazy(() => OrderOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const OrderItemWhereUniqueInputSchema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order: z.union([ z.lazy(() => OrderScalarRelationFilterSchema),z.lazy(() => OrderWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductScalarRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict());

export const OrderItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderItemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CakeRequestWhereInputSchema: z.ZodType<Prisma.CakeRequestWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict();

export const CakeRequestOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  department: z.lazy(() => DepartmentOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CakeRequestWhereUniqueInputSchema: z.ZodType<Prisma.CakeRequestWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestWhereInputSchema),z.lazy(() => CakeRequestWhereInputSchema).array() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  department: z.union([ z.lazy(() => DepartmentScalarRelationFilterSchema),z.lazy(() => DepartmentWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsListRelationFilterSchema).optional()
}).strict());

export const CakeRequestOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
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
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusWithAggregatesFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CakeRequestItemsWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  request: z.union([ z.lazy(() => CakeRequestScalarRelationFilterSchema),z.lazy(() => CakeRequestWhereInputSchema) ]).optional(),
  orderItem: z.union([ z.lazy(() => OrderItemScalarRelationFilterSchema),z.lazy(() => OrderItemWhereInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  request: z.lazy(() => CakeRequestOrderByWithRelationInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemOrderByWithRelationInputSchema).optional()
}).strict();

export const CakeRequestItemsWhereUniqueInputSchema: z.ZodType<Prisma.CakeRequestItemsWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsWhereInputSchema),z.lazy(() => CakeRequestItemsWhereInputSchema).array() ]).optional(),
  request_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  request: z.union([ z.lazy(() => CakeRequestScalarRelationFilterSchema),z.lazy(() => CakeRequestWhereInputSchema) ]).optional(),
  orderItem: z.union([ z.lazy(() => OrderItemScalarRelationFilterSchema),z.lazy(() => OrderItemWhereInputSchema) ]).optional(),
}).strict());

export const CakeRequestItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CakeRequestItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CakeRequestItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CakeRequestItemsMinOrderByAggregateInputSchema).optional()
}).strict();

export const CakeRequestItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => CakeRequestItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const DepartmentCreateInputSchema: z.ZodType<Prisma.DepartmentCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentUncheckedCreateInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentUpdateInputSchema: z.ZodType<Prisma.DepartmentUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export const DepartmentUncheckedUpdateInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export const DepartmentCreateManyInputSchema: z.ZodType<Prisma.DepartmentCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string()
}).strict();

export const DepartmentUpdateManyMutationInputSchema: z.ZodType<Prisma.DepartmentUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DepartmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassroomCreateInputSchema: z.ZodType<Prisma.ClassroomCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUncheckedCreateInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUpdateInputSchema: z.ZodType<Prisma.ClassroomUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomCreateManyInputSchema: z.ZodType<Prisma.ClassroomCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string()
}).strict();

export const ClassroomUpdateManyMutationInputSchema: z.ZodType<Prisma.ClassroomUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassroomUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelCreateInputSchema: z.ZodType<Prisma.GradeLevelCreateInput> = z.object({
  id: z.string().uuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export const GradeLevelUncheckedCreateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema).optional()
}).strict();

export const GradeLevelUpdateInputSchema: z.ZodType<Prisma.GradeLevelUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export const GradeLevelUncheckedUpdateInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema).optional()
}).strict();

export const GradeLevelCreateManyInputSchema: z.ZodType<Prisma.GradeLevelCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelUpdateManyMutationInputSchema: z.ZodType<Prisma.GradeLevelUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  firstname: z.string(),
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
  id: z.string().uuid().optional(),
  firstname: z.string(),
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  id: z.string().uuid().optional(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamCreateInputSchema: z.ZodType<Prisma.TeamCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateInputSchema: z.ZodType<Prisma.TeamUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  classroom_id: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUpdateInputSchema: z.ZodType<Prisma.TeamUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamCreateManyInputSchema: z.ZodType<Prisma.TeamCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  classroom_id: z.string()
}).strict();

export const TeamUpdateManyMutationInputSchema: z.ZodType<Prisma.TeamUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  id: z.string().uuid().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export const OrderItemUncheckedCreateInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  order_id: z.string(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemCreateManyInputSchema: z.ZodType<Prisma.OrderItemCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  order_id: z.string(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderItemUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestCreateInputSchema: z.ZodType<Prisma.CakeRequestCreateInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUpdateInputSchema: z.ZodType<Prisma.CakeRequestUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestCreateManyInputSchema: z.ZodType<Prisma.CakeRequestCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateInput> = z.object({
  id: z.string().uuid().optional(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  request_id: z.string(),
  order_item_id: z.string()
}).strict();

export const CakeRequestItemsUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  request_id: z.string(),
  order_item_id: z.string()
}).strict();

export const CakeRequestItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
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

export const ClassroomListRelationFilterSchema: z.ZodType<Prisma.ClassroomListRelationFilter> = z.object({
  every: z.lazy(() => ClassroomWhereInputSchema).optional(),
  some: z.lazy(() => ClassroomWhereInputSchema).optional(),
  none: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export const CakeRequestListRelationFilterSchema: z.ZodType<Prisma.CakeRequestListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestWhereInputSchema).optional()
}).strict();

export const ClassroomOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ClassroomOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DepartmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DepartmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DepartmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.DepartmentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  group_number: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
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

export const DepartmentScalarRelationFilterSchema: z.ZodType<Prisma.DepartmentScalarRelationFilter> = z.object({
  is: z.lazy(() => DepartmentWhereInputSchema).optional(),
  isNot: z.lazy(() => DepartmentWhereInputSchema).optional()
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

export const ClassroomCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClassroomCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassroomMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClassroomMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  grade_level_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassroomMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClassroomMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
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
  firstname: z.lazy(() => SortOrderSchema).optional(),
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
  firstname: z.lazy(() => SortOrderSchema).optional(),
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
  firstname: z.lazy(() => SortOrderSchema).optional(),
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

export const ClassroomScalarRelationFilterSchema: z.ZodType<Prisma.ClassroomScalarRelationFilter> = z.object({
  is: z.lazy(() => ClassroomWhereInputSchema).optional(),
  isNot: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export const TeamCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeamCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeamMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeamMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional()
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

export const OrderItemListRelationFilterSchema: z.ZodType<Prisma.OrderItemListRelationFilter> = z.object({
  every: z.lazy(() => OrderItemWhereInputSchema).optional(),
  some: z.lazy(() => OrderItemWhereInputSchema).optional(),
  none: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export const OrderItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderItemOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
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

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EnumOrderStatusFilterSchema: z.ZodType<Prisma.EnumOrderStatusFilter> = z.object({
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusFilterSchema) ]).optional(),
}).strict();

export const TeamNullableScalarRelationFilterSchema: z.ZodType<Prisma.TeamNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => TeamWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeamWhereInputSchema).optional().nullable()
}).strict();

export const ClassroomNullableScalarRelationFilterSchema: z.ZodType<Prisma.ClassroomNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ClassroomWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ClassroomWhereInputSchema).optional().nullable()
}).strict();

export const OrderBook_numberNumberCompoundUniqueInputSchema: z.ZodType<Prisma.OrderBook_numberNumberCompoundUniqueInput> = z.object({
  book_number: z.number(),
  number: z.number()
}).strict();

export const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput> = z.object({
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerName: z.lazy(() => SortOrderSchema).optional(),
  classroom_id: z.lazy(() => SortOrderSchema).optional(),
  team_id: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  pickup_date: z.lazy(() => SortOrderSchema).optional(),
  depository: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional(),
  advisor: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput> = z.object({
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  book_number: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  deposit: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumOrderStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional()
}).strict();

export const OrderScalarRelationFilterSchema: z.ZodType<Prisma.OrderScalarRelationFilter> = z.object({
  is: z.lazy(() => OrderWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const ProductScalarRelationFilterSchema: z.ZodType<Prisma.ProductScalarRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const CakeRequestItemsListRelationFilterSchema: z.ZodType<Prisma.CakeRequestItemsListRelationFilter> = z.object({
  every: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  some: z.lazy(() => CakeRequestItemsWhereInputSchema).optional(),
  none: z.lazy(() => CakeRequestItemsWhereInputSchema).optional()
}).strict();

export const CakeRequestItemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemAvgOrderByAggregateInput> = z.object({
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  product_id: z.lazy(() => SortOrderSchema).optional(),
  pound: z.lazy(() => SortOrderSchema).optional(),
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
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderItemSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderItemSumOrderByAggregateInput> = z.object({
  pound: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional()
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
  department_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestMinOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  requestDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  note: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  department_id: z.lazy(() => SortOrderSchema).optional(),
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

export const OrderItemScalarRelationFilterSchema: z.ZodType<Prisma.OrderItemScalarRelationFilter> = z.object({
  is: z.lazy(() => OrderItemWhereInputSchema).optional(),
  isNot: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export const CakeRequestItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CakeRequestItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.CakeRequestItemsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  request_id: z.lazy(() => SortOrderSchema).optional(),
  order_item_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ClassroomCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateNestedManyWithoutDepartmentInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const ClassroomUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema).array(),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema),z.lazy(() => CakeRequestCreateOrConnectWithoutDepartmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestCreateManyDepartmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestWhereUniqueInputSchema),z.lazy(() => CakeRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DepartmentCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional()
}).strict();

export const GradeLevelCreateNestedOneWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateNestedOneWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional()
}).strict();

export const TeamCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutClassroomInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutClassroomInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutClassroomInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema),z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]).optional(),
}).strict();

export const GradeLevelUpdateOneWithoutClassroomNestedInputSchema: z.ZodType<Prisma.GradeLevelUpdateOneWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => GradeLevelCreateOrConnectWithoutClassroomInputSchema).optional(),
  upsert: z.lazy(() => GradeLevelUpsertWithoutClassroomInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => GradeLevelWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => GradeLevelWhereInputSchema) ]).optional(),
  connect: z.lazy(() => GradeLevelWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema),z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]).optional(),
}).strict();

export const TeamUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.TeamUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamCreateWithoutClassroomInputSchema).array(),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => TeamCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TeamCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TeamWhereUniqueInputSchema),z.lazy(() => TeamWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => TeamUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => TeamUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutClassroomNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderCreateWithoutClassroomInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema),z.lazy(() => OrderCreateOrConnectWithoutClassroomInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyClassroomInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutClassroomInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutClassroomInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClassroomCreateNestedManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateNestedManyWithoutGrade_levelInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ClassroomUncheckedCreateNestedManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateNestedManyWithoutGrade_levelInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
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

export const ClassroomUpdateManyWithoutGrade_levelNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithoutGrade_levelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutGrade_levelNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema).array(),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema),z.lazy(() => ClassroomCreateOrConnectWithoutGrade_levelInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClassroomCreateManyGrade_levelInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ClassroomWhereUniqueInputSchema),z.lazy(() => ClassroomWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
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

export const ClassroomCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional()
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

export const ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneRequiredWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema),z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
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

export const OrderItemCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemCreateWithoutProductInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
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

export const ClassroomCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutOrderInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutOrderInputSchema),z.lazy(() => OrderItemCreateWithoutOrderInputSchema).array(),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema),z.lazy(() => OrderItemCreateOrConnectWithoutOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderItemCreateManyOrderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderItemWhereUniqueInputSchema),z.lazy(() => OrderItemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumOrderStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumOrderStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => OrderStatusSchema).optional()
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

export const ClassroomUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.ClassroomUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClassroomCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => ClassroomUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ClassroomWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ClassroomWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema),z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
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

export const CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateNestedManyWithoutOrderItemInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
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

export const CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithoutOrderItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema).array(),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),z.lazy(() => CakeRequestItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DepartmentCreateNestedOneWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateNestedOneWithoutCakeRequestInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional()
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

export const DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema: z.ZodType<Prisma.DepartmentUpdateOneRequiredWithoutCakeRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DepartmentCreateOrConnectWithoutCakeRequestInputSchema).optional(),
  upsert: z.lazy(() => DepartmentUpsertWithoutCakeRequestInputSchema).optional(),
  connect: z.lazy(() => DepartmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]).optional(),
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

export const CakeRequestCreateNestedOneWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateNestedOneWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateNestedOneWithoutCakeRequestItemsInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional()
}).strict();

export const CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema: z.ZodType<Prisma.CakeRequestUpdateOneRequiredWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CakeRequestCreateOrConnectWithoutItemsInputSchema).optional(),
  upsert: z.lazy(() => CakeRequestUpsertWithoutItemsInputSchema).optional(),
  connect: z.lazy(() => CakeRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CakeRequestUpdateToOneWithWhereWithoutItemsInputSchema),z.lazy(() => CakeRequestUpdateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutItemsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema: z.ZodType<Prisma.OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema).optional(),
  upsert: z.lazy(() => OrderItemUpsertWithoutCakeRequestItemsInputSchema).optional(),
  connect: z.lazy(() => OrderItemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
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

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
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

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumOrderStatusFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusFilter> = z.object({
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedEnumOrderStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrderStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => OrderStatusSchema).optional(),
  in: z.lazy(() => OrderStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => NestedEnumOrderStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderStatusFilterSchema).optional()
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

export const ClassroomCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export const ClassroomCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.ClassroomCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassroomCreateManyDepartmentInputSchema),z.lazy(() => ClassroomCreateManyDepartmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CakeRequestCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestCreateOrConnectWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export const CakeRequestCreateManyDepartmentInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestCreateManyDepartmentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestCreateManyDepartmentInputSchema),z.lazy(() => CakeRequestCreateManyDepartmentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ClassroomUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export const ClassroomUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutDepartmentInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutDepartmentInputSchema) ]),
}).strict();

export const ClassroomUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateManyMutationInputSchema),z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
}).strict();

export const ClassroomScalarWhereInputSchema: z.ZodType<Prisma.ClassroomScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClassroomScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClassroomScalarWhereInputSchema),z.lazy(() => ClassroomScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  grade_level_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const CakeRequestUpsertWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpsertWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutDepartmentInputSchema) ]),
}).strict();

export const CakeRequestUpdateWithWhereUniqueWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithWhereUniqueWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateWithoutDepartmentInputSchema),z.lazy(() => CakeRequestUncheckedUpdateWithoutDepartmentInputSchema) ]),
}).strict();

export const CakeRequestUpdateManyWithWhereWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateManyWithWhereWithoutDepartmentInput> = z.object({
  where: z.lazy(() => CakeRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestUpdateManyMutationInputSchema),z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema) ]),
}).strict();

export const CakeRequestScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestScalarWhereInputSchema),z.lazy(() => CakeRequestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  requestDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => EnumRequestStatusFilterSchema),z.lazy(() => RequestStatusSchema) ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  department_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const DepartmentCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const GradeLevelCreateWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  level: z.lazy(() => GradeLevelTypeSchema),
  year: z.number().int()
}).strict();

export const GradeLevelCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => GradeLevelWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const TeamCreateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export const TeamCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const TeamCreateManyClassroomInputEnvelopeSchema: z.ZodType<Prisma.TeamCreateManyClassroomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TeamCreateManyClassroomInputSchema),z.lazy(() => TeamCreateManyClassroomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OrderCreateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputSchema).optional()
}).strict();

export const OrderCreateOrConnectWithoutClassroomInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const OrderCreateManyClassroomInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyClassroomInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyClassroomInputSchema),z.lazy(() => OrderCreateManyClassroomInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DepartmentUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutClassroomInput> = z.object({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutClassroomInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional()
}).strict();

export const DepartmentUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutClassroomInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export const DepartmentUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export const DepartmentUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequest: z.lazy(() => CakeRequestUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export const GradeLevelUpsertWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpsertWithoutClassroomInput> = z.object({
  update: z.union([ z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => GradeLevelCreateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedCreateWithoutClassroomInputSchema) ]),
  where: z.lazy(() => GradeLevelWhereInputSchema).optional()
}).strict();

export const GradeLevelUpdateToOneWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpdateToOneWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => GradeLevelWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => GradeLevelUpdateWithoutClassroomInputSchema),z.lazy(() => GradeLevelUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export const GradeLevelUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const GradeLevelUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.GradeLevelUncheckedUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => GradeLevelTypeSchema),z.lazy(() => EnumGradeLevelTypeFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TeamUpdateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => TeamCreateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const TeamUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateWithoutClassroomInputSchema),z.lazy(() => TeamUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export const TeamUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateManyWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => TeamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TeamUpdateManyMutationInputSchema),z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomInputSchema) ]),
}).strict();

export const TeamScalarWhereInputSchema: z.ZodType<Prisma.TeamScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeamScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeamScalarWhereInputSchema),z.lazy(() => TeamScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedCreateWithoutClassroomInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutClassroomInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutClassroomInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutClassroomInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomInputSchema) ]),
}).strict();

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  customerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  classroom_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  team_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  orderDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  totalPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  book_number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  number: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pickup_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  depository: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deposit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  advisor: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumOrderStatusFilterSchema),z.lazy(() => OrderStatusSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ClassroomCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutGrade_levelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUncheckedCreateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutGrade_levelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomCreateOrConnectWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export const ClassroomCreateManyGrade_levelInputEnvelopeSchema: z.ZodType<Prisma.ClassroomCreateManyGrade_levelInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ClassroomCreateManyGrade_levelInputSchema),z.lazy(() => ClassroomCreateManyGrade_levelInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ClassroomUpsertWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpsertWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutGrade_levelInputSchema) ]),
}).strict();

export const ClassroomUpdateWithWhereUniqueWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateWithWhereUniqueWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutGrade_levelInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutGrade_levelInputSchema) ]),
}).strict();

export const ClassroomUpdateManyWithWhereWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateManyWithWhereWithoutGrade_levelInput> = z.object({
  where: z.lazy(() => ClassroomScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ClassroomUpdateManyMutationInputSchema),z.lazy(() => ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema) ]),
}).strict();

export const CakeRequestCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  items: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutRequestInputSchema).optional()
}).strict();

export const CakeRequestUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  department_id: z.string(),
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

export const ClassroomCreateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutTeamsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUncheckedCreateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutTeamsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export const OrderCreateWithoutTeamInputSchema: z.ZodType<Prisma.OrderCreateWithoutTeamInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orderItems: z.lazy(() => OrderItemCreateNestedManyWithoutOrderInputSchema).optional(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutTeamInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
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

export const ClassroomUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutTeamsInput> = z.object({
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export const ClassroomUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutTeamsInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export const ClassroomUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateWithoutTeamsInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutTeamsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
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

export const OrderItemCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export const OrderItemUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutProductInput> = z.object({
  id: z.string().uuid().optional(),
  order_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export const OrderItemCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutProductInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const OrderItemCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.OrderItemCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderItemCreateManyProductInputSchema),z.lazy(() => OrderItemCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
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
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  product_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  pound: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  unitPrice: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderItemCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutOrderInput> = z.object({
  id: z.string().uuid().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema),
  CakeRequestItems: z.lazy(() => CakeRequestItemsCreateNestedManyWithoutOrderItemInputSchema).optional()
}).strict();

export const OrderItemUncheckedCreateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutOrderInput> = z.object({
  id: z.string().uuid().optional(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedCreateNestedManyWithoutOrderItemInputSchema).optional()
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
  id: z.string().uuid().optional(),
  name: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutTeamsInputSchema)
}).strict();

export const TeamUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  classroom_id: z.string()
}).strict();

export const TeamCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.TeamCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => TeamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeamCreateWithoutOrdersInputSchema),z.lazy(() => TeamUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const ClassroomCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutClassroomInputSchema),
  grade_level: z.lazy(() => GradeLevelCreateNestedOneWithoutClassroomInputSchema).optional(),
  teams: z.lazy(() => TeamCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string(),
  grade_level_id: z.string(),
  teams: z.lazy(() => TeamUncheckedCreateNestedManyWithoutClassroomInputSchema).optional()
}).strict();

export const ClassroomCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => ClassroomWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]),
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneRequiredWithoutTeamsNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassroomUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ClassroomCreateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedCreateWithoutOrdersInputSchema) ]),
  where: z.lazy(() => ClassroomWhereInputSchema).optional()
}).strict();

export const ClassroomUpdateToOneWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateToOneWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => ClassroomWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClassroomUpdateWithoutOrdersInputSchema),z.lazy(() => ClassroomUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const ClassroomUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const OrderCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateWithoutOrderItemsInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  team: z.lazy(() => TeamCreateNestedOneWithoutOrdersInputSchema).optional(),
  classroom: z.lazy(() => ClassroomCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutOrderItemsInputSchema),z.lazy(() => OrderUncheckedCreateWithoutOrderItemsInputSchema) ]),
}).strict();

export const ProductCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateWithoutOrderItemsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export const ProductUncheckedCreateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutOrderItemsInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  price: z.number()
}).strict();

export const ProductCreateOrConnectWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrderItemsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutOrderItemsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutOrderItemsInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateWithoutOrderItemInput> = z.object({
  id: z.string().uuid().optional(),
  request: z.lazy(() => CakeRequestCreateNestedOneWithoutItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutOrderItemInput> = z.object({
  id: z.string().uuid().optional(),
  request_id: z.string()
}).strict();

export const CakeRequestItemsCreateOrConnectWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateManyOrderItemInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyOrderItemInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyOrderItemInputSchema),z.lazy(() => CakeRequestItemsCreateManyOrderItemInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateWithoutOrderItemsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutOrderItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpsertWithWhereUniqueWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema) ]),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutOrderItemInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithWhereUniqueWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateWithoutOrderItemInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema) ]),
}).strict();

export const CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateManyWithWhereWithoutOrderItemInput> = z.object({
  where: z.lazy(() => CakeRequestItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CakeRequestItemsUpdateManyMutationInputSchema),z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema) ]),
}).strict();

export const CakeRequestItemsScalarWhereInputSchema: z.ZodType<Prisma.CakeRequestItemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CakeRequestItemsScalarWhereInputSchema),z.lazy(() => CakeRequestItemsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  request_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  order_item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
}).strict();

export const DepartmentCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateWithoutCakeRequestInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedCreateWithoutCakeRequestInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  group_number: z.string(),
  classroom: z.lazy(() => ClassroomUncheckedCreateNestedManyWithoutDepartmentInputSchema).optional()
}).strict();

export const DepartmentCreateOrConnectWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentCreateOrConnectWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => DepartmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]),
}).strict();

export const UserCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserCreateWithoutCakeRequestInput> = z.object({
  id: z.string().uuid().optional(),
  firstname: z.string(),
  lastname: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().optional().nullable(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUncheckedCreateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCakeRequestInput> = z.object({
  id: z.string().uuid().optional(),
  firstname: z.string(),
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
  id: z.string().uuid().optional(),
  orderItem: z.lazy(() => OrderItemCreateNestedOneWithoutCakeRequestItemsInputSchema)
}).strict();

export const CakeRequestItemsUncheckedCreateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedCreateWithoutRequestInput> = z.object({
  id: z.string().uuid().optional(),
  order_item_id: z.string()
}).strict();

export const CakeRequestItemsCreateOrConnectWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateOrConnectWithoutRequestInput> = z.object({
  where: z.lazy(() => CakeRequestItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestItemsCreateWithoutRequestInputSchema),z.lazy(() => CakeRequestItemsUncheckedCreateWithoutRequestInputSchema) ]),
}).strict();

export const CakeRequestItemsCreateManyRequestInputEnvelopeSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema),z.lazy(() => CakeRequestItemsCreateManyRequestInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DepartmentUpsertWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpsertWithoutCakeRequestInput> = z.object({
  update: z.union([ z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]),
  create: z.union([ z.lazy(() => DepartmentCreateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedCreateWithoutCakeRequestInputSchema) ]),
  where: z.lazy(() => DepartmentWhereInputSchema).optional()
}).strict();

export const DepartmentUpdateToOneWithWhereWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateToOneWithWhereWithoutCakeRequestInput> = z.object({
  where: z.lazy(() => DepartmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DepartmentUpdateWithoutCakeRequestInputSchema),z.lazy(() => DepartmentUncheckedUpdateWithoutCakeRequestInputSchema) ]),
}).strict();

export const DepartmentUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUpdateManyWithoutDepartmentNestedInputSchema).optional()
}).strict();

export const DepartmentUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.DepartmentUncheckedUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  group_number: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom: z.lazy(() => ClassroomUncheckedUpdateManyWithoutDepartmentNestedInputSchema).optional()
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.lazy(() => RoleSchema),z.lazy(() => EnumRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateWithoutCakeRequestInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCakeRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstname: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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

export const CakeRequestCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateWithoutItemsInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  department: z.lazy(() => DepartmentCreateNestedOneWithoutCakeRequestInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutCakeRequestInputSchema)
}).strict();

export const CakeRequestUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUncheckedCreateWithoutItemsInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => CakeRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CakeRequestCreateWithoutItemsInputSchema),z.lazy(() => CakeRequestUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const OrderItemCreateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateWithoutCakeRequestItemsInput> = z.object({
  id: z.string().uuid().optional(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  order: z.lazy(() => OrderCreateNestedOneWithoutOrderItemsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutOrderItemsInputSchema)
}).strict();

export const OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutCakeRequestItemsInput> = z.object({
  id: z.string().uuid().optional(),
  order_id: z.string(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemCreateOrConnectWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutCakeRequestItemsInput> = z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]),
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
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpsertWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpsertWithoutCakeRequestItemsInput> = z.object({
  update: z.union([ z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]),
  create: z.union([ z.lazy(() => OrderItemCreateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedCreateWithoutCakeRequestItemsInputSchema) ]),
  where: z.lazy(() => OrderItemWhereInputSchema).optional()
}).strict();

export const OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpdateToOneWithWhereWithoutCakeRequestItemsInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrderItemUpdateWithoutCakeRequestItemsInputSchema),z.lazy(() => OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema) ]),
}).strict();

export const OrderItemUpdateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutCakeRequestItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutCakeRequestItemsInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutCakeRequestItemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassroomCreateManyDepartmentInputSchema: z.ZodType<Prisma.ClassroomCreateManyDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  grade_level_id: z.string()
}).strict();

export const CakeRequestCreateManyDepartmentInputSchema: z.ZodType<Prisma.CakeRequestCreateManyDepartmentInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  user_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ClassroomUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level: z.lazy(() => GradeLevelUpdateOneWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateManyWithoutDepartmentInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  grade_level_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutDepartmentInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutDepartmentInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeamCreateManyClassroomInputSchema: z.ZodType<Prisma.TeamCreateManyClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string()
}).strict();

export const OrderCreateManyClassroomInputSchema: z.ZodType<Prisma.OrderCreateManyClassroomInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  team_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TeamUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export const TeamUncheckedUpdateManyWithoutClassroomInputSchema: z.ZodType<Prisma.TeamUncheckedUpdateManyWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  team: z.lazy(() => TeamUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateManyWithoutClassroomInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutClassroomInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ClassroomCreateManyGrade_levelInputSchema: z.ZodType<Prisma.ClassroomCreateManyGrade_levelInput> = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  department_id: z.string()
}).strict();

export const ClassroomUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUpdateWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutClassroomNestedInputSchema).optional(),
  teams: z.lazy(() => TeamUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teams: z.lazy(() => TeamUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutClassroomNestedInputSchema).optional()
}).strict();

export const ClassroomUncheckedUpdateManyWithoutGrade_levelInputSchema: z.ZodType<Prisma.ClassroomUncheckedUpdateManyWithoutGrade_levelInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestCreateManyUserInputSchema: z.ZodType<Prisma.CakeRequestCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  requestDate: z.coerce.date(),
  status: z.lazy(() => RequestStatusSchema).optional(),
  note: z.string().optional().nullable(),
  department_id: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CakeRequestUpdateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  department: z.lazy(() => DepartmentUpdateOneRequiredWithoutCakeRequestNestedInputSchema).optional(),
  items: z.lazy(() => CakeRequestItemsUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutRequestNestedInputSchema).optional()
}).strict();

export const CakeRequestUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CakeRequestUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requestDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => RequestStatusSchema),z.lazy(() => EnumRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  department_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyTeamInputSchema: z.ZodType<Prisma.OrderCreateManyTeamInput> = z.object({
  id: z.string().uuid().optional(),
  customerName: z.string(),
  classroom_id: z.string().optional().nullable(),
  orderDate: z.coerce.date(),
  totalPrice: z.number(),
  book_number: z.number().int(),
  number: z.number().int(),
  phone: z.string(),
  pickup_date: z.coerce.date(),
  depository: z.string().optional().nullable(),
  deposit: z.number().int(),
  advisor: z.string(),
  status: z.lazy(() => OrderStatusSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUpdateManyWithoutOrderNestedInputSchema).optional(),
  classroom: z.lazy(() => ClassroomUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutTeamInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderItems: z.lazy(() => OrderItemUncheckedUpdateManyWithoutOrderNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutTeamInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  classroom_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  totalPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  book_number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pickup_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  depository: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deposit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  advisor: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => OrderStatusSchema),z.lazy(() => EnumOrderStatusFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyProductInputSchema: z.ZodType<Prisma.OrderItemCreateManyProductInput> = z.object({
  id: z.string().uuid().optional(),
  order_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order: z.lazy(() => OrderUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateManyWithoutProductInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutProductInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemCreateManyOrderInputSchema: z.ZodType<Prisma.OrderItemCreateManyOrderInput> = z.object({
  id: z.string().uuid().optional(),
  product_id: z.string(),
  pound: z.number().int(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  subtotal: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderItemUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutOrderItemsNestedInputSchema).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateWithoutOrderInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CakeRequestItems: z.lazy(() => CakeRequestItemsUncheckedUpdateManyWithoutOrderItemNestedInputSchema).optional()
}).strict();

export const OrderItemUncheckedUpdateManyWithoutOrderInputSchema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutOrderInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  product_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pound: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  unitPrice: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateManyOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyOrderItemInput> = z.object({
  id: z.string().uuid().optional(),
  request_id: z.string()
}).strict();

export const CakeRequestItemsUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutOrderItemInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request: z.lazy(() => CakeRequestUpdateOneRequiredWithoutItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutOrderItemInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutOrderItemInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  request_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsCreateManyRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsCreateManyRequestInput> = z.object({
  id: z.string().uuid().optional(),
  order_item_id: z.string()
}).strict();

export const CakeRequestItemsUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUpdateWithoutRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderItem: z.lazy(() => OrderItemUpdateOneRequiredWithoutCakeRequestItemsNestedInputSchema).optional()
}).strict();

export const CakeRequestItemsUncheckedUpdateWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateWithoutRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CakeRequestItemsUncheckedUpdateManyWithoutRequestInputSchema: z.ZodType<Prisma.CakeRequestItemsUncheckedUpdateManyWithoutRequestInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  order_item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const DepartmentFindFirstArgsSchema: z.ZodType<Prisma.DepartmentFindFirstArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema,DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DepartmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DepartmentFindFirstOrThrowArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema,DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DepartmentFindManyArgsSchema: z.ZodType<Prisma.DepartmentFindManyArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DepartmentScalarFieldEnumSchema,DepartmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DepartmentAggregateArgsSchema: z.ZodType<Prisma.DepartmentAggregateArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithRelationInputSchema.array(),DepartmentOrderByWithRelationInputSchema ]).optional(),
  cursor: DepartmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DepartmentGroupByArgsSchema: z.ZodType<Prisma.DepartmentGroupByArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  orderBy: z.union([ DepartmentOrderByWithAggregationInputSchema.array(),DepartmentOrderByWithAggregationInputSchema ]).optional(),
  by: DepartmentScalarFieldEnumSchema.array(),
  having: DepartmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DepartmentFindUniqueArgsSchema: z.ZodType<Prisma.DepartmentFindUniqueArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema,
}).strict() ;

export const DepartmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DepartmentFindUniqueOrThrowArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema,
}).strict() ;

export const ClassroomFindFirstArgsSchema: z.ZodType<Prisma.ClassroomFindFirstArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithRelationInputSchema.array(),ClassroomOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassroomScalarFieldEnumSchema,ClassroomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassroomFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClassroomFindFirstOrThrowArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithRelationInputSchema.array(),ClassroomOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassroomScalarFieldEnumSchema,ClassroomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassroomFindManyArgsSchema: z.ZodType<Prisma.ClassroomFindManyArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithRelationInputSchema.array(),ClassroomOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClassroomScalarFieldEnumSchema,ClassroomScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ClassroomAggregateArgsSchema: z.ZodType<Prisma.ClassroomAggregateArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithRelationInputSchema.array(),ClassroomOrderByWithRelationInputSchema ]).optional(),
  cursor: ClassroomWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClassroomGroupByArgsSchema: z.ZodType<Prisma.ClassroomGroupByArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
  orderBy: z.union([ ClassroomOrderByWithAggregationInputSchema.array(),ClassroomOrderByWithAggregationInputSchema ]).optional(),
  by: ClassroomScalarFieldEnumSchema.array(),
  having: ClassroomScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ClassroomFindUniqueArgsSchema: z.ZodType<Prisma.ClassroomFindUniqueArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereUniqueInputSchema,
}).strict() ;

export const ClassroomFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClassroomFindUniqueOrThrowArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereUniqueInputSchema,
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

export const DepartmentCreateArgsSchema: z.ZodType<Prisma.DepartmentCreateArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  data: z.union([ DepartmentCreateInputSchema,DepartmentUncheckedCreateInputSchema ]),
}).strict() ;

export const DepartmentUpsertArgsSchema: z.ZodType<Prisma.DepartmentUpsertArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema,
  create: z.union([ DepartmentCreateInputSchema,DepartmentUncheckedCreateInputSchema ]),
  update: z.union([ DepartmentUpdateInputSchema,DepartmentUncheckedUpdateInputSchema ]),
}).strict() ;

export const DepartmentCreateManyArgsSchema: z.ZodType<Prisma.DepartmentCreateManyArgs> = z.object({
  data: z.union([ DepartmentCreateManyInputSchema,DepartmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DepartmentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DepartmentCreateManyAndReturnArgs> = z.object({
  data: z.union([ DepartmentCreateManyInputSchema,DepartmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DepartmentDeleteArgsSchema: z.ZodType<Prisma.DepartmentDeleteArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  where: DepartmentWhereUniqueInputSchema,
}).strict() ;

export const DepartmentUpdateArgsSchema: z.ZodType<Prisma.DepartmentUpdateArgs> = z.object({
  select: DepartmentSelectSchema.optional(),
  include: DepartmentIncludeSchema.optional(),
  data: z.union([ DepartmentUpdateInputSchema,DepartmentUncheckedUpdateInputSchema ]),
  where: DepartmentWhereUniqueInputSchema,
}).strict() ;

export const DepartmentUpdateManyArgsSchema: z.ZodType<Prisma.DepartmentUpdateManyArgs> = z.object({
  data: z.union([ DepartmentUpdateManyMutationInputSchema,DepartmentUncheckedUpdateManyInputSchema ]),
  where: DepartmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const DepartmentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.DepartmentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ DepartmentUpdateManyMutationInputSchema,DepartmentUncheckedUpdateManyInputSchema ]),
  where: DepartmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const DepartmentDeleteManyArgsSchema: z.ZodType<Prisma.DepartmentDeleteManyArgs> = z.object({
  where: DepartmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClassroomCreateArgsSchema: z.ZodType<Prisma.ClassroomCreateArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  data: z.union([ ClassroomCreateInputSchema,ClassroomUncheckedCreateInputSchema ]),
}).strict() ;

export const ClassroomUpsertArgsSchema: z.ZodType<Prisma.ClassroomUpsertArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereUniqueInputSchema,
  create: z.union([ ClassroomCreateInputSchema,ClassroomUncheckedCreateInputSchema ]),
  update: z.union([ ClassroomUpdateInputSchema,ClassroomUncheckedUpdateInputSchema ]),
}).strict() ;

export const ClassroomCreateManyArgsSchema: z.ZodType<Prisma.ClassroomCreateManyArgs> = z.object({
  data: z.union([ ClassroomCreateManyInputSchema,ClassroomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ClassroomCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClassroomCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClassroomCreateManyInputSchema,ClassroomCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ClassroomDeleteArgsSchema: z.ZodType<Prisma.ClassroomDeleteArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  where: ClassroomWhereUniqueInputSchema,
}).strict() ;

export const ClassroomUpdateArgsSchema: z.ZodType<Prisma.ClassroomUpdateArgs> = z.object({
  select: ClassroomSelectSchema.optional(),
  include: ClassroomIncludeSchema.optional(),
  data: z.union([ ClassroomUpdateInputSchema,ClassroomUncheckedUpdateInputSchema ]),
  where: ClassroomWhereUniqueInputSchema,
}).strict() ;

export const ClassroomUpdateManyArgsSchema: z.ZodType<Prisma.ClassroomUpdateManyArgs> = z.object({
  data: z.union([ ClassroomUpdateManyMutationInputSchema,ClassroomUncheckedUpdateManyInputSchema ]),
  where: ClassroomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClassroomUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ClassroomUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ClassroomUpdateManyMutationInputSchema,ClassroomUncheckedUpdateManyInputSchema ]),
  where: ClassroomWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ClassroomDeleteManyArgsSchema: z.ZodType<Prisma.ClassroomDeleteManyArgs> = z.object({
  where: ClassroomWhereInputSchema.optional(),
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