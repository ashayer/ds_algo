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
  .query("get-user-info", {
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
  })
  .query("get-user-stats", {
    input: z.object({ id: z.string() }),
    async resolve({ input }) {
      const gameStats = await prisma.user.findFirst({
        where: {
          id: input.id,
        },
        select: {
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
  })
  .mutation("update-game-stats", {
    input: z.object({
      id: z.string(),
      gameStats: z.object({
        gamesplayed: z.number(),
        points: z.number(),
        rightanswer: z.number(),
        wronganswer: z.number(),
        responsetime: z.number(),
        higheststreak: z.number(),
      }),
    }),
    async resolve({ input }) {
      await prisma.user.update({
        where: {
          id: input.id,
        },
        data: {
          gamesplayed: input.gameStats.gamesplayed,
          points: input.gameStats.points,
          rightanswer: input.gameStats.rightanswer,
          wronganswer: input.gameStats.wronganswer,
          responsetime: input.gameStats.responsetime,
          higheststreak: input.gameStats.higheststreak,
        },
      });
    },
  });

