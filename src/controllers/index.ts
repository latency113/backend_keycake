import { createApplication } from "@/configure/create-application"
import User from "./User/index.js"
import Branch from "./Branch/index.js"
import { authController } from "@/auth/auth.controller.js"


export default ()=> {
    const app = createApplication()
    app.use(authController)
    app.use(User(app))
    app.use(Branch(app))
    return app
}