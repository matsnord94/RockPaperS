
document.addEventListener('DOMContentLoaded', function() {


// var for chosing best of 3 or 5
let gameMode3 = false; 
let gameMode5 = false;
gameMode3 = true;
gameMode5 = false;


//Var choices
let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;

// var winning

let playerWin = false;
let computerWin = false;
//buttons
let buttonMode3 = document.getElementById('bestOf3');
let buttonMode5 = document.getElementById('bestOf5');
let buttonStart = document.getElementById('gameStart')
let buttonPlayerChoseRock = document.getElementById('rock');
let buttonPlayerChosePaper = document.getElementById('paper')
let buttonPlayerChoseScissor = document.getElementById('scissor')

// set variables for text changing

let playerChoiceDiv = document.getElementById('showUserChoice');
let computerChoiceDiv = document.getElementById('showComputerChoice');
let playerScoreP = document.getElementById('playerScoreText');
let computerScoreP = document.getElementById('computerScoreText');

buttonStart.addEventListener('click',function(){
    console.log('game starting');
    fullGame();
})


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

// funktion för playerChoice
function checkForPlayerChoice(){
    return new Promise(function(resolve){

    
    buttonPlayerChoseRock.addEventListener('click', function(){
        playerChoice = 0;
        playerChoiceDiv.textContent = translateNumber(playerChoice)
        console.log(playerChoiceDiv)
        // setTimeout(playOneRound, 1000)
        resolve();
        
    })
    
    buttonPlayerChosePaper.addEventListener('click', function(){
        playerChoice = 1;
        console.log('papper knapp tryckt')
        playerChoiceDiv.textContent = translateNumber(playerChoice)
        resolve();
    })
    
    buttonPlayerChoseScissor.addEventListener('click', function(){
        playerChoice = 2;
        playerChoiceDiv.textContent = translateNumber(playerChoice)
        resolve();
    })
});

}


async function fullGame() {
    let gameModeInt = 3;
    if(gameMode5){
        gameModeInt = 5;
    }
while(playerScore <= gameModeInt && computerScore <= gameModeInt){
    showScore();
    console.log('väntar på spelarval');
    await checkForPlayerChoice();
    console.log('spelare valt');
    playOneRound();
    
    console.log('player score is',playerScore)
    console.log('computer score is', computerScore)
    console.log('game mode is:', gameModeInt)
}
if(playerscore > computerScore){
    playerWin = true;
}
else {
    computerWin = true;
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

 

}



// function for computerChoice
function computerChoiceFunction(){
   
    let computerChoiceInt = Math.floor(Math.random() * (2 + 1))// * 3

    return computerChoiceInt
};

function showScore(){
    playerScoreP.textContent = playerScore.toString();
    computerScoreP.textContent = computerScore.toString();
}




toggleButton(buttonMode3, true);
toggleButton(buttonMode5, false);

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

}

)
