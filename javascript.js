
document.addEventListener('DOMContentLoaded', function() {


// var for chosing best of 3 or 5
let gameMode3 = false; 
let gameMode5 = false;
let gameStarted = false;
let gameRunning = false;
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
    if(!gameRunning) {
        playerScore = 0;
        computerScore = 0;
        playerScoreP.style.backgroundColor = 'white';
        computerScoreP.style.backgroundColor = 'white';
        showScore();
        let gameModeInt = 3;
        if(!gameStarted && gameMode5){
            
                gameModeInt = 5;
            
        }
        gameRunning = true;
        buttonStart.style.backgroundColor = '#00f050';
      
        fullGame(gameModeInt);

    }
   
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
    let playerChoiceResolver;
// funktion för playerChoice
function checkForPlayerChoice(){
    return new Promise(function(resolve){

    playerChoiceResolver = resolve;
    
    });

}

//buttons

buttonPlayerChoseRock.addEventListener('click', function(){
  
    if(gameRunning)
    {
    
    playerChoice = 0;
    playerChoiceDiv.textContent = translateNumber(playerChoice)
    // setTimeout(playOneRound, 1000)
    playerChoiceResolver();
    }
})

buttonPlayerChosePaper.addEventListener('click', function(){

    if(gameRunning)
    {
        playerChoice = 1;
        console.log('papper knapp tryckt')
        playerChoiceDiv.textContent = translateNumber(playerChoice)
        playerChoiceResolver();
    }
    
})

buttonPlayerChoseScissor.addEventListener('click', function(){
    if(gameRunning){
        playerChoice = 2;
        playerChoiceDiv.textContent = translateNumber(playerChoice)
        playerChoiceResolver();
    }

})


async function fullGame(gameModeInt) {
   

while(gameRunning){
    
    await checkForPlayerChoice();
    playOneRound();
    showScore();
  
    if(playerScore >= gameModeInt || computerScore >= gameModeInt)
    {

        if(playerScore > computerScore){
            gameRunning = false;
            buttonStart.style.backgroundColor = 'gray';
            playerScoreP.style.backgroundColor = 'green';
            
        }
        else{
            gameRunning =  false;
            console.log('game is over, computer wins');
            buttonStart.style.backgroundColor = 'gray';
            computerScoreP.style.backgroundColor = 'green';
            
        }

    }

}
}


//function for one round
function playOneRound(){
 console.log('runda startad')
 computerChoice = computerChoiceFunction();
 console.log(computerChoice)
 computerChoiceDiv.textContent = translateNumber(computerChoice);

 

    if(playerChoice === computerChoice)
    {
        console.log('draw');
    }

    else if( playerChoice === 0 && computerChoice === 2 ||
            playerChoice === 1 && computerChoice === 0 ||
            playerChoice === 2 && computerChoice === 1)
    {

  console.log('player wins')
  playerScore++;
    }
  else
    {
    console.log('computer wins')
    computerScore++;
    }
 }




// function for computerChoice
function computerChoiceFunction(){
   
    let computerChoiceInt = Math.floor(Math.random() * (2 + 1))// * 3

    return computerChoiceInt
};

function showScore(){
    playerScoreP.textContent = playerScore;
    computerScoreP.textContent = computerScore;
}




toggleButton(buttonMode3, true);
toggleButton(buttonMode5, false);

buttonMode3.addEventListener('click', function(){
    if(!gameRunning){
        gameMode3 = true;
        gameMode5 = false;
        toggleButton(buttonMode3, true);
        toggleButton(buttonMode5, false);
    }


})

buttonMode5.addEventListener('click',function(){
    if(!gameRunning){
        gameMode3 = false;
        gameMode5 = true;
        toggleButton(buttonMode3, false);
        toggleButton(buttonMode5, true);
    }

})

}

)
