import { useState, useEffect, useCallback } from "react";
import { Grid, Button, Container, Box } from "@mui/material";
// import gameQuestionList from "../../utils/gameQuestionList";
// import gameHandler from "../../utils/GameHandlers/gameHandler";
// import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
// import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
// import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";
// import UserStatsTable from "../../components/UserStatsTable/UserStatsTable";
// import useUserStore from "../../stores/userStore";
// import produce from "immer";
// import useAuthStore from "../../stores/authStore";
// import axios from "axios";

// const updateUserPoints = async (id: string, gameStats: GameStats) => {
//   if (gameStats) {
//     try {
//       const response = await axios.patch(`/api/user/updateGameStats/${id}`, { gameStats });
//       return response.data;
//     } catch (error) {
//       alert("Something went wrong");
//     }
//   }
// };

let highestStreak = 0;
const Game = () => {
  //   const [gameStarted, setGameStarted] = useState(false);
  //   const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[0]);
  //   const [questionDisplay, setQuestionDisplay] = useState<GameDisplayInfo>();
  //   const sessionGameStats = useUserStore((state) => state.sessionGameStats);
  //   const setSessionGameStats = useUserStore((state) => state.setSessionGameStats);
  //   const setGameHasStarted = useUserStore((state) => state.setGameHasStarted);
  //   const userId = useAuthStore((state) => state.id);
  //   const gameStats = useUserStore((state) => state.gameStats);
  //   const setGameStats = useUserStore((state) => state.setGameStats);

  //   const questionStartTime = new Date();

  //   const onGameStart = () => {
  //     const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
  //     setQuestionInfo(gameQuestionList[randomIndex]);
  //     setGameStarted(true);
  //     setGameHasStarted(true);
  //   };

  //   const calculateUpdate = () => {
  //     const totalQuestions = sessionGameStats.numCorrect + sessionGameStats.numWrong;
  //     if (totalQuestions > 0) {
  //       let averageResponseTime = Math.floor(sessionGameStats.responseTime / totalQuestions);
  //       const lifeTimeAverage = Math.floor(
  //         (gameStats.responseTime + averageResponseTime) / gameStats.gamesPlayed,
  //       );
  //       const nextState = produce(gameStats, (draftState) => {
  //         draftState.gamesPlayed += 1;
  //         draftState.points += sessionGameStats.points;
  //         draftState.numCorrect += sessionGameStats.numCorrect;
  //         draftState.numWrong += sessionGameStats.numWrong;
  //         draftState.responseTime = lifeTimeAverage;
  //         draftState.streak = highestStreak;
  //       });
  //       setGameStats(nextState);
  //       updateUserPoints(userId, nextState);
  //     }
  //   };

  //   const isHighestStreak = () => {
  //     if (sessionGameStats.streak > highestStreak) {
  //       highestStreak = sessionGameStats.streak;
  //     }
  //   };

  //   const onGameEnd = () => {
  //     calculateUpdate();
  //     const nextState = produce(sessionGameStats, (draftState) => {
  //       draftState.numCorrect = 0;
  //       draftState.streak = 0;
  //       draftState.points = 0;
  //       draftState.responseTime = 0;
  //       draftState.numWrong = 0;
  //     });
  //     highestStreak = 0;
  //     setSessionGameStats(nextState);
  //     setGameHasStarted(false);
  //     setGameStarted(false);
  //   };

  //   const generateNextQuestion = useCallback(() => {
  //     const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
  //     setQuestionInfo(gameQuestionList[randomIndex]);
  //   }, []);

  //   const calculatePoints = () => {
  //     // if streak over 3 then add 10 to (streak - 3) * 1.67
  //     let updatePointsBy = 0;
  //     if (sessionGameStats.streak > 3) {
  //       updatePointsBy = 10 + (sessionGameStats.streak - 3) * 1.67;
  //     } else {
  //       updatePointsBy = 10;
  //     }
  //     return Math.floor(updatePointsBy);
  //   };

  //   const answeredCorrect = () => {
  //     const questionEndTime = new Date();
  //     const updatePointsBy = calculatePoints();
  //     const nextState = produce(sessionGameStats, (draftState) => {
  //       draftState.numCorrect += 1;
  //       draftState.streak += 1;
  //       draftState.points += updatePointsBy;
  //       draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
  //     });
  //     isHighestStreak();
  //     setSessionGameStats(nextState);
  //     generateNextQuestion();
  //   };

  //   const answeredWrong = () => {
  //     const questionEndTime = new Date();
  //     const updatePointsBy = calculatePoints();
  //     const nextState = produce(sessionGameStats, (draftState) => {
  //       draftState.numWrong += 1;
  //       draftState.streak = 0;
  //       draftState.points += updatePointsBy;
  //       draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
  //     });
  //     setSessionGameStats(nextState);
  //     generateNextQuestion();
  //   };

  //   useEffect(() => {
  //     setQuestionDisplay(gameHandler(questionInfo as GameQuestionInfo));
  //   }, [questionInfo]);

  return (
    <>
      {/* {gameStarted && questionDisplay ? (
        <Grid item container sx={{ marginInline: "auto" }}>
          <UserStatsTable />
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
      )} */}
    </>
  );
};

export default Game;
