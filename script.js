'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const displayScore = (score) => {
     document.querySelector('.score').textContent = score;
}


const displayNumber = (number) => {
    document.querySelector('.number').textContent = number;
}

const dispalyBodyNumber = (col,wid) => {
    document.querySelector('body').style.backgroundColor = col;
    document.querySelector('.number').style.width = wid;
}

let newScore = 20;
let newHigh = 0;

document.querySelector('.check').addEventListener('click', function(){

    const guess =  Number( document.querySelector('.guess ').value );


    if(!guess) {
        displayMessage('😡 No Number!');
    }else if(guess === secretNumber) {

        displayNumber(secretNumber);

        displayMessage('🎉 Correct answer!');
        
        let score = document.querySelector('.score').textContent;

        if(score>newHigh){
            newHigh = score;
            document.querySelector('.highscore').textContent = newHigh;
        }

        dispalyBodyNumber('#60b347','30rem');
        
    } else if(guess !== secretNumber){
        if(newScore > 1) {
            displayMessage(guess > secretNumber? '📈 to  high!':'📈 to  low!');
            newScore--;
            displayScore(newScore);
        }else {
            displayMessage('💥 You loose the game\ntry again!');
            displayScore(0);
        }

        dispalyBodyNumber('#222','15rem');
    }
     
})




document.querySelector('.again').addEventListener('click', function(){
    newScore = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    displayScore(newScore);
    displayNumber('?');
    displayMessage('Start guessing...');
    dispalyBodyNumber('#222','15rem');
    document.querySelector('.guess').value='';
})