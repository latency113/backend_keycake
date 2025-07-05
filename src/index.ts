import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";

const app = new Elysia()
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Cake documentation",
          version: "0.1.0",
        },
      },
    })
  )
  
  .listen(3001);
  app.use(cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    credentials: true,
    origin: ["http://localhost:3000"],
}))

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/docs`
);
