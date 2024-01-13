// var for chosing best of 3 or 5
let gameMode3 = false; 
let gameMode5 = false;

//Var choices
let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;


// function for toggling style
function toggleButton(button, isClicked){

    button.style.backgroundColor = isClicked ? '#008000' : 'lightgrey';
    button.style.color = isClicked ? 'white' : 'black';
}

// function translate number to text
function translateNumber(numberToBeTranslated){
   switch(numberToBeTranslated){
   case 0:
        return 'Rock';
    
    case 1:
        return'Paper';
    
    case 2:
        return 'Scissors';
}
}

//function for one round
function playOneRound(){
 console.log('runda startad')
 computerChoice = computerChoiceFunction();
 console.log(computerChoice)
 computerChoiceDiv.textContent = translateNumber(computerChoice);

 switch(playerChoice){
    case 0:
        if(computerChoice === 0){
            console.log('draw');
        }
        else if (computerChoice === 1){
            console.log('computer wins')
            computerScore ++;
        }
        else if (computerChoice === 2){
            console.log('player wins')
            playerScore ++;
        }
 }

 showScore();

}

// function for computerChoice
function computerChoiceFunction(){
   
    let computerChoiceInt = Math.floor(Math.random() * (2 + 1))// * 3

    return computerChoiceInt
};

function showScore(){
    playerScoreP.textContent = playerScore.toString();
    
}


//buttons
let buttonMode3 = document.getElementById('bestOf3');
let buttonMode5 = document.getElementById('bestOf5');
let buttonStart = document.getElementById('gameStart')
let buttonPlayerChoseRock = document.getElementById('rock');
let buttonPlayerChosePaper = document.getElementById('paper')
let buttonPlayerChoseScissor = document.getElementById('scissor')

buttonMode3.addEventListener('click', function(){
    gameMode3 = true;
    gameMode5 = false;
    toggleButton(buttonMode3, true);
    toggleButton(buttonMode5, false);

})

buttonMode5.addEventListener('click',function(){
    gameMode3 = false;
    gameMode5 = true;
    toggleButton(buttonMode3, false);
    toggleButton(buttonMode5, true);

})

// set variables for text changing

let playerChoiceDiv = document.getElementById('showUserChoice');
let computerChoiceDiv = document.getElementById('showComputerChoice');
let playerScoreP = document.getElementById('playerScoreText');
let computerScoreP = document.getElementById('playerScoreText');

buttonPlayerChoseRock.addEventListener('click', function(){
    playerChoice = 0;
    playerChoiceDiv.textContent = translateNumber(playerChoice)
    console.log(playerChoiceDiv)
    // setTimeout(playOneRound, 1000)
    playOneRound();
})

buttonPlayerChosePaper.addEventListener('click', function(){
    playerChoice = 1;
    console.log('papper knapp tryckt')
    playerChoiceDiv.textContent = translateNumber(playerChoice)
    playOneRound();
})

buttonPlayerChoseScissor.addEventListener('click', function(){
    playerChoice = 2;
    playerChoiceDiv.textContent = translateNumber(playerChoice)
    playOneRound();
})
