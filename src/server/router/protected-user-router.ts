import { createProtectedRouter } from "./protected-router";
import { prisma } from "../db/client";

// Example router with queries that can only be hit if the user requesting is signed in
export const protectedUserRouter = createProtectedRouter().query("get-all-user-stats", {
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
});

