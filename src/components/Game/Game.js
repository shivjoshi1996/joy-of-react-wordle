import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessesList from '../GuessesList/GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessesList, setGuessesList] = useState([]);
  const [gameState, setGameState] = useState(null);


  return (
    <>
      <GuessesList guessesList={guessesList} answer={answer} setGameState={setGameState} />
      <GuessInput guessesListLength={guessesList.length} setGameState={setGameState} setGuessesList={setGuessesList} gameState={gameState} answer={answer}/>
    </>
  )
}

export default Game;
