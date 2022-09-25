import { useState, useEffect, useCallback } from "react";
import { Grid, Button, Container, Box } from "@mui/material";
import gameQuestionList from "../utils/gameQuestionList";
import gameHandler from "../utils/GameHandlers/gameHandler";
import GameQuestionAnswerChoice from "../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../components/GameQuestionText/GameQuestionText";
import UserStatsTable from "../components/UserStatsTable/UserStatsTable";
import produce from "immer";
import { useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const Game = () => {
  const { data: session } = useSession();
  let higheststreak = 0;
  const [gameStarted, setGameStarted] = useState(false);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[0]);
  const [questionDisplay, setQuestionDisplay] = useState<GameDisplayInfo>();
  const [sessionGameStats, setSessionGameStats] = useState<SessionGameStats>({
    points: 0,
    numCorrect: 0,
    numWrong: 0,
    responseTime: 0,
    streak: 0,
  });
  //   const setGameHasStarted = useUserStore((state) => state.setGameHasStarted);
  const gameStats = trpc.useQuery(["auth.get-user-stats", { id: session?.user?.id as string }]);
  const updateStats = trpc.useMutation(["auth.update-game-stats"], {
    onMutate: () => {
      setGameStarted(false);
    },
  });
  const questionStartTime = new Date();
  const onGameStart = () => {
    const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
    setQuestionInfo(gameQuestionList[randomIndex]);
    setGameStarted(true);
  };

  const calculateUpdate = () => {
    if (gameStats.isSuccess && gameStats.data) {
      const totalQuestions = sessionGameStats.numCorrect + sessionGameStats.numWrong;
      if (totalQuestions > 0) {
        const averageResponseTime = Math.floor(sessionGameStats.responseTime / totalQuestions);
        let firstGame = false;
        if (gameStats.data.gamesplayed === 0) {
          firstGame = true;
        }
        const lifeTimeAverage = Math.floor(
          (gameStats.data.responsetime + 1 + averageResponseTime) /
            (firstGame ? 1 : gameStats.data.gamesplayed),
        );
        console.log(lifeTimeAverage);
        const nextState = produce(gameStats.data, (draftState) => {
          draftState.gamesplayed += 1;
          draftState.points += sessionGameStats.points;
          draftState.rightanswer += sessionGameStats.numCorrect;
          draftState.wronganswer += sessionGameStats.numWrong;
          draftState.responsetime = lifeTimeAverage;
          draftState.higheststreak = higheststreak;
        });
        if (session) {
          updateStats.mutate({ id: session.user?.id as string, gameStats: nextState });
        }
      }
    }
  };

  const isHighestStreak = () => {
    if (sessionGameStats.streak > higheststreak) {
      higheststreak = sessionGameStats.streak;
    }
  };

  const onGameEnd = () => {
    calculateUpdate();
    if (updateStats.isSuccess) {
      const nextState = produce(sessionGameStats, (draftState) => {
        draftState.numCorrect = 0;
        draftState.streak = 0;
        draftState.points = 0;
        draftState.responseTime = 0;
        draftState.numWrong = 0;
      });
      higheststreak = 0;
      setSessionGameStats(nextState);
      setGameStarted(false);
    }
  };

  const generateNextQuestion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
    setQuestionInfo(gameQuestionList[randomIndex]);
  }, []);

  const calculatePoints = () => {
    // if streak over 3 then add 10 to (streak - 3) * 1.67
    let updatePointsBy = 0;
    if (sessionGameStats.streak > 3) {
      updatePointsBy = 10 + (sessionGameStats.streak - 3) * 1.67;
    } else {
      updatePointsBy = 10;
    }
    return Math.floor(updatePointsBy);
  };

  const answeredCorrect = () => {
    const questionEndTime = new Date();
    const updatePointsBy = calculatePoints();
    const nextState = produce(sessionGameStats, (draftState) => {
      draftState.numCorrect += 1;
      draftState.streak += 1;
      draftState.points += updatePointsBy;
      draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
    });
    setSessionGameStats(nextState);
    isHighestStreak();
    generateNextQuestion();
  };

  const answeredWrong = () => {
    const questionEndTime = new Date();
    const updatePointsBy = calculatePoints();
    const nextState = produce(sessionGameStats, (draftState) => {
      draftState.numWrong += 1;
      draftState.streak = 0;
      draftState.points += updatePointsBy;
      draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
    });
    setSessionGameStats(nextState);
    generateNextQuestion();
  };

  useEffect(() => {
    setQuestionDisplay(gameHandler(questionInfo as GameQuestionInfo));
  }, [questionInfo]);

  return (
    <>
      <Head>
        <title>Game</title>
      </Head>
      {gameStarted && questionDisplay ? (
        <Grid item container sx={{ marginInline: "auto" }}>
          <UserStatsTable sessionGameStats={sessionGameStats} />
          <GameQuestionText questionDisplay={questionDisplay} />
          <GameQuestionContent
            questionDisplay={questionDisplay}
            setQuestionDisplay={setQuestionDisplay}
          />
          <GameQuestionAnswerChoice
            questionDisplay={questionDisplay}
            answeredCorrect={answeredCorrect}
            answeredWrong={answeredWrong}
          />
          <Grid
            item
            container
            xs={8}
            sx={{ mt: 5, justifyContent: "center", marginInline: "auto" }}
          >
            <Button fullWidth variant="contained" color="error" onClick={onGameEnd}>
              END GAME
            </Button>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid
            item
            container
            xs={10}
            sx={{ mt: 5, justifyContent: "center", marginInline: "auto" }}
          >
            <Button fullWidth variant="outlined" onClick={onGameStart}>
              START GAME
            </Button>
          </Grid>
        </>
      )}
    </>
  );
};

export default Game;
