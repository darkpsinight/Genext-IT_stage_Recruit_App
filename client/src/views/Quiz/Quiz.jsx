import React, { useState, useContext } from 'react';
import MainMenu from '../Components/MainMenu';
import Quizz from '../Components/Quizz';
import EndScreen from '../Components/EndScreen';
import { QuizContext } from '../Helpers/Contexts';

const Quiz = () => {
  const [gameState, setGameState] = useState('menu');
  const [score, setscore] = useState(0); //global state for score

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setscore }}
      >
        {/* n3addiw les states globales lil components */}
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quizz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
};

export default Quiz;
