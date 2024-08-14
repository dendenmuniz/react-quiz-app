import React, { useState } from "react";
import { fetchQuizQuestions, QuestionState, Difficulty } from "./API";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.style";

export type AnswerObject = {
  question: string;
  answer: string;
  correctAnswer: string;
  correct: boolean;
};

interface AppState {
  loading: boolean;
  questions: QuestionState[];
  number: number;
  userAnswers: AnswerObject[];
  score: number;
  gameOver: boolean;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [state, setState] = useState<AppState>({
    loading: false,
    questions: [],
    number: 0,
    userAnswers: [],
    score: 0,
    gameOver: false,
  });

  //Start the game, consuming the API to gather the questions
  const handleStartTrivia = async () => {
    setState({ ...state, loading: true, gameOver: false });
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setState({
      ...state,
      questions: newQuestions,
      score: 0,
      userAnswers: [],
      number: 0,
      loading: false,
    });
  };

  // Trigger check user Answer and update Score
  const handleCheckAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!state.gameOver) {
      const answer = e.currentTarget.value;
      const correct = state.questions[state.number].correct_answer === answer;
      setState({
        ...state,
        score: correct ? state.score + 1 : state.score,
        userAnswers: [
          ...state.userAnswers,
          {
            question: state.questions[state.number].question,
            answer,
            correct,
            correctAnswer: state.questions[state.number].correct_answer,
          },
        ],
      });
    }
  };

  //Move to next if not the last
  const handleNextQuestion = () => {
    if (state.number + 1 < TOTAL_QUESTIONS) {
      setState({ ...state, number: state.number + 1 });
    } else {
      setState({ ...state, gameOver: true });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1> React Quiz</h1>
        {/* If not Game Over and doesn't have answers for total questions -> shows button to start the game */}
        {!state.gameOver || (state.userAnswers.length === TOTAL_QUESTIONS) ? (
          <button className="start" onClick={handleStartTrivia}>
            Start
          </button>
        ) : null}
        {/* Check if the game is over to show Score */}
        {!state.gameOver ? <p className="score">Score: {state.score}</p> : null}

        {/* Check if got the response from API, otherwise show message of Loading */}
        {state.loading && <p>Loading Questions...</p>}

        {/* Check if is loaded the questions and game is not over to show the questions */}
        {!state.loading && !state.gameOver && state.questions.length > 0 && (
          <QuestionCard
            questionNr={state.number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={state.questions[state.number].question}
            answers={state.questions[state.number].answers}
            userAnswer={
              state.userAnswers ? state.userAnswers[state.number] : undefined
            }
            callback={handleCheckAnswer}
          />
        )}

        {/* Check if user has answered the question, there is more questions to answer and is loaded to allow the user go to the next question*/}
        {!state.gameOver &&
        !state.loading &&
        state.userAnswers.length === state.number + 1 &&
        state.number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={handleNextQuestion}>
            Next question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
