import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import { ScoreContext } from '../Helpers/scoreContext';

function Quizz() {
  const { setGameState } = useContext(QuizContext);
  const [score, setScore] = useContext(ScoreContext);

  const [currQuestion, setcurrQuestion] = useState(0); //state de numero de current question: 0/1/2
  const [optionChosen, setoptionChosen] = useState(''); //state de l'option choisi: A ou B ou C ou D

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    //alert(score);
    setcurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState('endScreen');
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setoptionChosen('A')}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setoptionChosen('B')}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setoptionChosen('C')}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setoptionChosen('D')}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Test</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quizz;
