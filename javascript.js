
let gameMode3 = false; 
let gameMode5 = false;



// color change depending on game mode choice 
let buttonMode3 = document.getElementById('bestOf3');
let buttonMode5 = document.getElementById('bestOf5');
let buttontest = document.getElementById('rock');
function computerChoice(){
   
    let computerChoiceInt = Math.floor(Math.random() * (2 + 1))// * 3
    if(computerChoiceInt === 0){
        return 'Rock';
    }

    else if (computerChoiceInt === 1){
        return 'Paper';
    }

    else if (computerChoiceInt === 2){
        return 'Scissors';
    }
 
     
    

   
};

buttonMode3.addEventListener('click', function(){
    gameMode3 = true;
    gameMode5 = false;
    buttonMode3.style.backgroundColor = '#008000';
    buttonMode3.style.color = 'white';
    buttonMode3.style.textDecorationLine = 'none';
    buttonMode5.style.backgroundColor = 'lightgrey';
    buttonMode5.style.color = 'black';
    buttonMode5.style.textDecorationLine = 'none';
})

buttonMode5.addEventListener('click',function(){
    gameMode3 = false;
    gameMode5 = true;
    buttonMode5.style.backgroundColor = '#008000';
    buttonMode5.style.color = 'white';
    buttonMode5.style.textDecorationLine = 'none';
    buttonMode3.style.backgroundColor = 'lightgrey';
    buttonMode3.style.color = 'black';
    buttonMode3.style.textDecorationLine = 'none';
})

buttontest.addEventListener('click', function(){
    let computer = computerChoice()
    console.log(computer)
})
