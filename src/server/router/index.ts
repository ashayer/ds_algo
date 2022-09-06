// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";
import { protectedUserRouter } from "./protected-user-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", protectedUserRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

