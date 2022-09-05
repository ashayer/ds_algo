import { createProtectedRouter } from "./protected-router";
import { prisma } from "../db/client";
import { z } from "zod";

// Example router with queries that can only be hit if the user requesting is signed in
export const protectedUserRouter = createProtectedRouter()
  .query("get-all-user-stats", {
    async resolve() {
      const userStats = await prisma.user.findMany({
        select: {
          gamesplayed: true,
          points: true,
          rightanswer: true,
          wronganswer: true,
          responsetime: true,
          higheststreak: true,
          name: true,
        },
      });

      return userStats;
    },
  })
  .query("get-user-stats", {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      const gameStats = await prisma.user.findFirst({
        where: {
          id: input.id,
        },
        select: {
          name: true,
          gamesplayed: true,
          points: true,
          rightanswer: true,
          wronganswer: true,
          responsetime: true,
          higheststreak: true,
        },
      });

      return gameStats;
    },
  });

