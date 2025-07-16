import dotenvx from "@dotenvx/dotenvx"
import cors from "@elysiajs/cors"
import { swagger } from "@elysiajs/swagger"
import { Elysia } from "elysia"
import controllers from "@/controllers"

dotenvx.config()

const app = new Elysia()
  app.use(cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
  }))
  app.use(controllers())
  app.use(
    swagger({
      documentation: {
        components: {
          securitySchemes: {
            bearerAuth: {
              bearerFormat: "JWT",
              scheme: "bearer",
              type: "http",
            },
          },
        },
        info: {
          title: "Cake documentation",
          version: "0.1.0",
        },
      },
      path: "/docs",
    }),
  )
  .listen(3001)

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/docs`,
)
