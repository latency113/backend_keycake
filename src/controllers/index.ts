import { authController } from "@/auth/auth.controller.js"
import { createApplication } from "@/configure/create-application"
import Branch from "./Branch/index.js"
import GradeLevel from "./GradeLevel/index.js"
import Room from "./Room/index.js"
import User from "./User/index.js"

export default () => {
  const app = createApplication()
  app.use(authController)
  app.use(User(app))
  app.use(Branch(app))
  app.use(Room(app))
  app.use(GradeLevel(app))
  return app
}
