import { useState } from "react";

export default function GuessInput({setGameState, guessesListLength, setGuessesList, gameState, answer}){
  const [guess, setGuess] = useState("");
  
  function handleGuessChange(e){
    const {value} = e.target;

    const isGuessValid = guessValidation(value);

    if (!isGuessValid) {
      return;
    }

    // Convert valid guess to uppercase before setting to state
    const uppercasedValue = value.toUpperCase();

    setGuess(uppercasedValue);
  }


  function guessValidation(guess){
    // Check if value is 5 characters, if so stop setting state;
    if (guess.length > 5) {
      return false;
    }
  
    // We need to check if the value most recently inputted is a valid letter
    const latestInput = guess.charAt(guess.length - 1);
  
    if (latestInput){
      // Check if guess is a letter or number / symbol
      const isLetter = latestInput.toLowerCase() !== latestInput.toUpperCase();
  
      if (!isLetter) {
        return false;
      }
    }

    return true;
  }

  function handleGuessSubmit(e){
    e.preventDefault();

    // Check if value is 5 characters
    if (guess.length !== 5){
      console.log("KEEP GUESSING");
      return;
    }

    console.log(guess);

    // Max 5 total guesses

    // REFACTOR - Game winnning / losing logic shouldn't be here. 
    
    // if (guessesListLength === 5 && gameState !== "won"){
    //   console.log("GAME OVER MAX GUESSES DONE")
    //   setGameState("lost")
    // }

    if (guessesListLength > 5){
      return;
    }

    // Add guess to guesses array
    setGuessesList((prevGuessesList) => [...prevGuessesList, guess])

    // Reset guess field
    setGuess("");
    
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>

      {gameState === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessesListLength} guesses</strong>.
          </p>
      </div>
      )}

      {gameState === "lost" && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}

      <input disabled={gameState === "won" || gameState === "lost"} id="guess-input" type="text" value={guess}  onChange={handleGuessChange} />
    </form>
  )
}