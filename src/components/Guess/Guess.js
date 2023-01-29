import { useEffect } from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

export default function Guess({word, answer, setGameState, guessesListLength}){
  const numberOfLetters = range(0, 5);

  let isWordCorrect = null;

  if (word){
    isWordCorrect = checkGuess(word, answer);
  }

  useEffect(() => {
    if (isWordCorrect && isWordCorrect.filter((word) => word.status === "correct").length === 5) {
      console.log("You won")
      setGameState("won")
    }
  
    if (guessesListLength === 6 && isWordCorrect.filter((word) => word.status === 'correct').length !== 5) {
      console.log("You lost");
      setGameState("lost");
    }
  }, [guessesListLength, isWordCorrect, setGameState])

  
  return (
    <p className="guess">
      {numberOfLetters.map((letterColumn, columnIndex) => {
        const style = isWordCorrect ? isWordCorrect[columnIndex].status : null;
        return (
          <span key={`Cell - ${columnIndex}, word`} className={`cell ${style}`}>{word && word[columnIndex]}</span>
        )
      }
      )}
    </p>
  )
}