window.addEventListener('load', init)
//Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
    levels: () => {
        if (condition) {
            
        } else {
            
        }
    }
}

// To change levels
const currentLevel = levels.easy;
let time = 5;
let score = 0;
let isPlaying;




//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const highScoreDisplay = document.querySelector('#highscore')
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero'
];

//Initialize Game

function init(){
    
    //Load word form array
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
    
}

//Start match
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    // if score is -1, dispaly 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
        
    }
    
}

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'correct!!';
        return true;
    }else {
        message.innerHTML = '';
        return false;
    }
}
//pick and show random word
function showWord(words){
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //Output random word
    currentWord.innerHTML = words[randIndex];
    
}

//Countdown timer
function countdown(){
    //make sure time is not run out
    if(time > 0) {
        //Decrement
        time--
    }else if(time === 0) {
        //Game is over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time; 
}
function checkStatus(){
    if (!isPlaying && time === 0){
        message.innerHTML = 'Game over!!'
        score = -1;
        
    }
}