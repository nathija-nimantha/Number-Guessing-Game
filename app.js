let numberInput = document.getElementById('number');
let guessBtn = document.getElementById('btnGuess');
let result = document.getElementById('guess');
let img = document.getElementById('imgDisplay');

let randomNumber = Math.floor((Math.random()*10)+1);
let guessCount = 1;
let imgdis = '';

guessBtn.addEventListener('click', function(){
    let guess = parseInt(numberInput.value);
    if(isNaN(guess)){
        result.innerHTML = 'Please enter a number!';
    }else if(guessCount === 3){
        guessCount = 1;
        randomNumber = Math.floor((Math.random()*10)+1);
        result.innerHTML = 'Game Over! Start Again!';
        imgdis = 'you-failed.jpg';
        displayImage();
    }else if(guess === randomNumber){
        result.innerHTML = 'Congratulations! You guessed it in ' + guessCount + ' guesses! \n But you get nothing :) ';
        guessCount = 1;
        imgdis = 'you-won.jpg';
        displayImage();
    }else if(guess > randomNumber){
        result.innerHTML = 'Lower';
        guessCount++;
        imgdis = 'try-again.jpg';
        displayImage();
    }else{
        result.innerHTML = 'Higher';
        guessCount++;
        imgdis = 'try-again.jpg';
        displayImage();
    }
});

function displayImage(){
    img.src = 'img/' + imgdis;
}

