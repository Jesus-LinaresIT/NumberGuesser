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
   // Validate
   if(isNaN(guess) || guess < min || guess > max){
      let msg = `Please enter a number between ${min} and ${max}`;
      assignCls = 'alert alert-danger';
      setMessage(msg, assignCls);
   }

   // Check if won
   if(guess !== winningNum){
      let msg = `Please enter a number between ${min} and ${max}`;
      assignCls = 'alert alert-danger';
      setMessage(msg, assignCls);
   }else{
      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.className = "border border-success";
      // Set Message
      let msg = `Congratulation ${winningNum} is a number correct!`;
      assignCls = 'alert alert-success';
      setMessage(msg, assignCls);
   }
});

// Set Message
function setMessage(msg, assignCls){
   message.className = assignCls;
   message.textContent = msg;
}