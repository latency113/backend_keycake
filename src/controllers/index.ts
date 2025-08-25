import { authController } from "@/auth/auth.controller.js"
import { createApplication } from "@/configure/create-application"
import CakeRequest from "./CakeRequest/index.js"
import CakeRequestItem from "./CakeRequestItem/index.js"
import Classroom from "./Classroom/index.js"
import Department from "./Department/index.js"
import GradeLevel from "./GradeLevel/index.js"
import Order from "./Order/index.js"
import OrderItem from "./OrderItem/index.js"
import Product from "./Product/index.js"
import Team from "./Team/index.js"
import User from "./User/index.js"

export default () => {
  const app = createApplication()
  app.group("/api/v1", (app) => {
    app.use(authController)
    app.use(User(app))
    app.use(Department(app))
    app.use(Classroom(app))
    app.use(GradeLevel(app))
    app.use(Team(app))
    app.use(Product(app))
    app.use(CakeRequest(app))
    app.use(CakeRequestItem(app))
    app.use(Order(app))
    app.use(OrderItem(app))
    return app
  })
  return app
}
