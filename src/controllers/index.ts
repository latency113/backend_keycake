import { createApplication } from "@/configure/create-application"
import User from "./User/index.js"

export default ()=> {
    const app = createApplication()
    app.use(User(app))
    return app
}