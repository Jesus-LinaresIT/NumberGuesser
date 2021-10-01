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
   winningNum = 2,
   guessesLeft = 3;

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

// Liste for guess
guessBtn.addEventListener('click', ()=>{
   let guess = parseInt(guessInput.value);
   let assignCls;
   // Validate
   if(guess < min || guess > max || isNaN(guess)){
      let msg = `Please enter a number between ${min} and ${max}`;
      assignCls = 'alert alert-danger';
      setMessage(msg, assignCls);
   }else{
      // Check if won
      if(guess !== winningNum){
         // Wrong number
         guessesLeft -= 1;

         if(guessesLeft === 0){
            // Game Over - lost
            let msg = `Game over, you lost. The correct number was ${winningNum}`;
            gameOver(false, msg);
         }else{
            // Game continues - answer wrong
            let assignCls = 'alert alert-warning';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, assignCls);
         }
      }else{
         // Game Over - won
         let msg = `Congratulation ${winningNum} is a number correct!`;
         gameOver(true, msg)
      }
   }

});


// Game Over
function gameOver(won, msg){
   let assignCls;
   if(won === true){
      assignCls='alert alert-success';
      guessInput.disabled = true;
      // Change border color
      guessInput.className = "border border-success";
      setMessage(msg, assignCls);
   }else{
      assignCls='alert alert-danger';
      guessInput.disabled = true;
      // Change border color
      guessInput.className = "border border-danger";
      setMessage(msg, assignCls);
   }
}

// Set Message
function setMessage(msg, assignCls){
   message.className = assignCls;
   message.textContent = msg;
}