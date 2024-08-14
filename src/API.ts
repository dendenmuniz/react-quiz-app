import { shuffleArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

const API_ENDPOINT = "https://opentdb.com/api.php";

export const fetchQuizQuestions = async (
  totalQuestions: number,
  difficulty: Difficulty
) => {
  /*  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  })); */
  try {
    const response = await fetch(
      `${API_ENDPOINT}?amount=${totalQuestions}&difficulty=${difficulty}`
    );
    const data = await response.json();
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
