import { getRandomThrow, checkResult } from './get.random.throw.js';
// grabs button
const playButton = document.getElementById('battle');
const resetButton = document.getElementById('reset');
// following code grabs spans
const battleWins = document.getElementById('wins');
const battleDraws = document.getElementById('draws');
const battleLosses = document.getElementById('losses');
// following reveals results section
const resultsReveal = document.getElementById('results-reveal');
const winReveal = document.getElementById('win-reveal');
const drawReveal = document.getElementById('draw-reveal');
const lossReveal = document.getElementById('loss-reveal');
const hideRules1 = document.getElementById('game-rules-1');


// initialize state
let wins = 0;
let draws = 0;
let losses = 0;
// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    // grabs radio button(image)
    const radioCheck = document.querySelector('input:checked');
    // grabs user battle element
    const userThrow = radioCheck.value;
    // grabs computer battle element
    const computerThrow = getRandomThrow();
    // time to reveal the winner
    switch (checkResult(userThrow, computerThrow)) {
        case 0:
            hideRules1.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            drawReveal.classList.remove('hidden');
            draws++;
            battleDraws.textContent = draws;
            break;
        case 1:
            hideRules1.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            winReveal.classList.remove('hidden');
            wins++;
            battleWins.textContent = wins;
            break;
        case 2:
            hideRules1.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            lossReveal.classList.remove('hidden');
            losses++;
            battleLosses.textContent = losses;
            break;
        default:
            alert('404 not found');
    }
});

resetButton.addEventListener('click', () => {
    return window.location.reload(true);
});
