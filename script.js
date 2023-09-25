'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.body-4__paragraph').textContent = message;
}


document.querySelector('.btn-check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.body-4__input').value);
    
    if(!guess) {

        displayMessage('⛔ No Number!');
    }

    else if (guess === randomNumber) {

        document.querySelector('.body-3__span').textContent = randomNumber;
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.body-4__input').style.backgroundColor = '#60b347';
        document.querySelector('.body-3').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.body-4__span-4').textContent = highscore;
        }

    }
    else if (guess !== randomNumber) {

        if(score > 1) {
            displayMessage(guess > randomNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.body-4__span-2').textContent = score;
        }

        else {
            displayMessage('💥 You lost the game');
        }
    }

    
})



document.querySelector('.btn-try-again').addEventListener('click', function() {

    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.body-4__input').value = ' ';
    displayMessage('Start guessing...');
    document.querySelector('.body-4__span-2').textContent = score;
    document.querySelector('.body-3__span').textContent = '?';




    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.body-4__input').style.backgroundColor = '#222';
    document.querySelector('.body-3').style.width = '15rem';

})