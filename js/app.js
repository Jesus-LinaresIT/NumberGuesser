/*
GAME FUNCTION:
- Player must guess a number between a min a max.
- Player gets a certain amount of guesses.
- Notify player of guesses remaining.
- Notify the player of the correct answer if loose.
- Let player choose to play again.
*/

// Game Values
let min = 1,
   max = 10,
   winningNum = getRandomNumb(min, max),
   guessesLeft = 3;

const styleB = {
   assignClsDan: 'alert alert-danger',
   assignClsWar: 'alert alert-warning',
   assignClsSuc: 'alert alert-success',
   assignBorS: "border border-success",
   assignBorD: "border border-danger"
};

// UI Elements
const gameElem = document.querySelector('#game'),
   minNum = document.querySelector('.min-num'),
   maxNum = document.querySelector('.max-num'),
   guessBtn = document.querySelector('#guess-btn'),
   guessInput = document.querySelector('#guess-input'),
   message = document.querySelector('.message');

// Assign UI min and max numbers
minNum.textContent = min;
maxNum.textContent = max;

// Event play again
gameElem.addEventListener('mousedown', (e) => {
   let playAgain = e.target.className;
   if(playAgain === 'play-again') {
      window.location.reload();
   }
})

// Liste for guess
guessBtn.addEventListener('click', ()=>{
   let messCls = {
      guess: parseInt(guessInput.value),
      msgFil: `Please enter a number between ${min} and ${max}`,
      msgLose: `Game over, you lost. The correct number was ${winningNum}`,
      msgWon: `Congratulation ${winningNum} is a number correct!`
   };
   const {guess, msgFil,
      msgLose, msgWon} = messCls;

   // Validate
   if(guess < min || guess > max || isNaN(guess)){
      setMessage(msgFil, styleB.assignClsDan);
   }else{
      // Check if won
      if(guess !== winningNum){
         // Wrong number
         guessesLeft -= 1;

         if(guessesLeft <= 0){
            // Game Over - lost
            gameOver(false, msgLose);
         }else{
            // Game continues - answer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, styleB.assignClsWar);
            guessInput.value = '';
         }
      }else{
         // Game Over - won
         gameOver(true, msgWon)
      }
   }
});

// Game Over
function gameOver(won, msg){
   if(won){
      guessInput.disabled = true;
      // Change border color
      guessInput.className = styleB.assignBorS;
      setMessage(msg, styleB.assignClsSuc);
      // Play again?
      guessBtn.value = 'Play Again'
      guessBtn.className += 'play-again'
   }else{
      guessInput.disabled = true;
      // Change border color
      guessInput.className = styleB.assignBorD;
      setMessage(msg, styleB.assignClsDan);
      // Play again?
      guessBtn.value = 'Play Again'
      guessBtn.className += 'play-again'
   }
}

// Get Winning number
function getRandomNumb(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}

// Set Message
function setMessage(msg, assignCls){
   message.className = assignCls;
   message.textContent = msg;
}