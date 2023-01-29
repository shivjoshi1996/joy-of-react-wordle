import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import Guess from '../Guess/Guess';

export default function GuessesList({guessesList, answer, setGameState}) {

  const guessesAllowedArray = range(0, NUM_OF_GUESSES_ALLOWED);
  const guessesWithGuessList = guessesAllowedArray.map((guess, index) => guess = guessesList[index] || undefined)

  return (
    <div className="guess-results">
      {guessesWithGuessList.map((word, index) => 
        <Guess key={index} word={word} answer={answer} setGameState={setGameState} guessesListLength={guessesList.length} />
      )}
    </div>
  )
}