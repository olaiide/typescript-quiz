import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./API";
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnawers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;
  const startTrivia = () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

  return (
    <div className='App'>
      <h1>React quiz</h1>
      <button>Start</button>
      <p>Score :</p>
      <p>Loading question</p>
      {/* <QuestionCard 
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswers={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App;
