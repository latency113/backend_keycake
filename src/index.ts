import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import controllers from "@/controllers";
import { config } from 'dotenv';

config(); // Load .env file

const app = new Elysia()
  .use(cors({
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    credentials: true,
    origin: ["http://localhost:3000"],
  }))
  .use(controllers())
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Cake documentation",
          version: "0.1.0",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
      },
    })
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}/docs`
);
