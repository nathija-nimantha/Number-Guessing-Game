let numberInput = document.getElementById('number');
let guessBtn = document.getElementById('btnGuess');
let result = document.getElementById('guess');

let randomNumber = Math.floor((Math.random()*10)+1);
let guessCount = 1;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(numberInput.value);
    if(isNaN(guess)){
        result.innerHTML = 'Please enter a number!';
    }else if(guessCount === 3){
        guessCount = 1;
        randomNumber = Math.floor((Math.random()*10)+1);
        result.innerHTML = 'Game Over! Start Again!';
    }else if(guess === randomNumber){
        result.innerHTML = 'Congratulations! You guessed it in ' + guessCount + ' guesses! \n But you get nothing :) ';
        guessCount = 1;
    }else if(guess > randomNumber){
        result.innerHTML = 'Lower';
        guessCount++;
    }else{
        result.innerHTML = 'Higher';
        guessCount++;
    }
});
