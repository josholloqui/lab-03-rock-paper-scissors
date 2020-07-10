import { getRandomThrow, checkResult } from './get.random.throw.js';

// GET DOM elements
const playButton = document.getElementById('battle');
const resetButton = document.getElementById('reset');

const battleWins = document.getElementById('wins');
const battleDraws = document.getElementById('draws');
const battleLosses = document.getElementById('losses');

const resultsReveal = document.getElementById('results-reveal');
const winReveal = document.getElementById('win-reveal');
const drawReveal = document.getElementById('draw-reveal');
const lossReveal = document.getElementById('loss-reveal');
const hideBattle = document.getElementById('hide-battle');

// initialize global state
let wins = 0;
let draws = 0;
let losses = 0;

playButton.addEventListener('click', () => {
    const radioCheck = document.querySelector('input:checked');

    // Grabs battle elements
    const userThrow = radioCheck.value;
    const computerThrow = getRandomThrow();

    // time to reveal the winner
    switch (checkResult(userThrow, computerThrow)) {
        // Draw
        case 0:
            hideBattle.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            drawReveal.classList.remove('hidden');
            lossReveal.classList.add('hidden');
            winReveal.classList.add('hidden');
            draws++;
            battleDraws.textContent = draws;
            break;

        // Winner
        case 1:
            hideBattle.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            winReveal.classList.remove('hidden');
            drawReveal.classList.add('hidden');
            lossReveal.classList.add('hidden');
            wins++;
            battleWins.textContent = wins;
            break;
        
        // Loss
        case 2:
            hideBattle.classList.add('hidden');
            resultsReveal.classList.remove('hidden');
            lossReveal.classList.remove('hidden');
            winReveal.classList.add('hidden');
            drawReveal.classList.add('hidden');
            losses++;
            battleLosses.textContent = losses;
            break;
        default:
            alert('404 not found');
    }
});

resetButton.addEventListener('click', () => {
    return window.location.reload();
});
