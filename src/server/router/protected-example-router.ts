import { createProtectedRouter } from "./protected-router";
import { prisma } from "../../server/db/client";

// Example router with queries that can only be hit if the user requesting is signed in
export const protectedExampleRouter = createProtectedRouter()
  .query("getSession", {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .query("getSecretMessage", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
  })
  .query("get-all-user-stats", {
    async resolve() {
      const userStats = prisma.userGameStats.findMany({
        select: {
          gamesplayed: true,
          points: true,
          rightanswer: true,
          wronganswer: true,
          responsetime: true,
          higheststreak: true,
          user: true,
        },
      });

      return userStats;
    },
  });

