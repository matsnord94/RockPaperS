// color change depending on game mode choice
let gameMode = false;

let buttonModeText = document.getElementById('bestOf3');

buttonModeText.addEventListener('click', function(){
      buttonModeText.style.backgroundColor = '#008000';
      buttonModeText.style.color = 'white';
      buttonModeText.style.textDecorationLine = 'none';
})